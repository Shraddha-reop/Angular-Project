import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './services/app.service';

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
  public schemes = [];
  constructor(public fb: FormBuilder, public service: AppService) {

  }

  ngOnInit() {

    this.form = this.fb.group({
      startdate: ['', Validators.required],
      amount: ['', Validators.required],
      scheme: ['', Validators.required],
      enddate: ['', Validators.required]
    })

    this.service.getSheme().subscribe(sch => {
      this.schemes = sch;
    })

  }
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form.value);
      return;
    }
    this.investment = true;
    this.date = this.form.value.enddate
    console.log(this.form.value.enddate);
    
    this.service.storeNav(this.form.value.startdate, this.form.value.amount, this.form.value.scheme).subscribe(abc => {
      console.log(abc);
    })

  }

}
