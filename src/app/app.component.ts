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
   localStorage.setItem('isMovie', 'false')

  }
  get f() { return this.form.controls; }

  

  onSubmit() {
   
    }
    ngOnDestroy(){
     
    }
}
