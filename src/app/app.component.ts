import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from './services/app.service';
import { nav } from './models/app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit, OnDestroy{
  public form: FormGroup;
  public submitted = false;
  public toDoArray = [];
  public length :number = 0;
  constructor(public fb: FormBuilder, public service: AppService) {

  }

  ngOnInit() {

    this.form = this.fb.group({
      toDoTask: ['', Validators.required],
     
    })

  }
  get f() { return this.form.controls; }

  onClear(i){
    console.log(i);
    let toDoTask = JSON.parse(localStorage.getItem('toDoTask')) || [];
    let arr = toDoTask.filter((data, index) => index !== i);
    console.log(arr);
    localStorage.setItem('toDoTask', JSON.stringify(arr));
    this.toDoArray = JSON.parse(localStorage.getItem('toDoTask')) || [];
    this.length = this.toDoArray.length;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let toDoTask = JSON.parse(localStorage.getItem('toDoTask')) || [];
    toDoTask.push(this.form.value.toDoTask)
    this.form.reset('');
    localStorage.setItem('toDoTask', JSON.stringify(toDoTask));
    this.toDoArray =  JSON.parse(localStorage.getItem('toDoTask')) || [];
    this.length = this.toDoArray.length;
    }
    ngOnDestroy(){
      localStorage.clear();
    }
}
