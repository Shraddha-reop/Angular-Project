import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit,OnChanges {

  @Input() movie:any;
  public slides = [];
  public isMovie = false;
  constructor(private router: Router) { }


  ngOnInit(): void {
    console.log(this.movie);
  }
  ngOnChanges(changes: SimpleChanges): void{
    
     this.slides = changes.movie.currentValue
}

onClick(id){
console.log(id)
// this.isMovie = true
localStorage.setItem('isMovie','true');

}

}
