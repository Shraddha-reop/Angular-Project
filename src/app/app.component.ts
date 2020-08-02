import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './services/app.service';
import { nav } from './models/app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public form: FormGroup;
  public investment: boolean = false;
  public submitted = false;
  public date;
  public schemes = ['ncjvhb', 'mdnjcdn', ',mvkjkn'];
  public finalAmount: number;
  public finalNav;

  constructor(public fb: FormBuilder, public service: AppService) {

  }

  ngOnInit() {

    this.form = this.fb.group({
      startdate: ['', Validators.required],
      amount: ['', Validators.required],
      scheme: ['', Validators.required],
      enddate: ['', Validators.required]
    })

    this.service.getSheme().subscribe(sch =>{
      this.schemes = sch;
    })

    localStorage.setItem('currentUser', JSON.stringify(this.finalNav));

  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    var num = (this.form.value.amount * (nav.NAV2 / 100)) - (this.form.value.amount * (nav.NAV1 / 100))
    const objDate = this.dateDiff(this.form.value.startdate, this.form.value.enddate);
    var daysAmonut = num * objDate.dayDiff / 365;
    var monthsAmount = num * objDate.monthDiff / 12;
    var yearAmount = num * objDate.yearDiff;
    const finalPercentage = Math.floor(daysAmonut + monthsAmount + yearAmount);
    const finalAmount = this.form.value.amount + (this.form.value.amount * (finalPercentage / 100))
    if (finalAmount) {
      this.investment = true;
      this.date = this.form.value.enddate
      this.finalAmount = finalAmount;
      this.finalNav = {
        startDate: this.form.value.startdate,
        endDate: this.form.value.enddate,
        nav1: nav.NAV1,
        nav2: nav.NAV2,
        amount: this.form.value.amount,
        finalAmount: this.finalAmount
      }
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(this.finalNav)
    localStorage.setItem('users', JSON.stringify(users));
  }

  getNav() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let res = JSON.stringify(users);
    const blob = new Blob([res], { type: 'text' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
  dateDiff(startingDate, endingDate) {
    var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10);
    }
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
      var swap = startDate;
      startDate = endDate;
      endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }
    return { yearDiff, monthDiff, dayDiff };
  }

  onReset() {
    this.form.patchValue({ startdate: '', endate: '', amount: '', scheme: '' });
    this.investment = false;
  }

}
