import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movielistscreen',
  templateUrl: './movielistscreen.component.html',
  styleUrls: ['./movielistscreen.component.scss']
})
export class MovielistscreenComponent implements OnInit {

  public cardLists = [];

  public isMovie = 'No';

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.isMovie = localStorage.getItem('isMovie');
    console.log(this.isMovie);
    this.service.fetchGenre().subscribe(genre => {
      if(genre){
        this.cardLists = genre.genres
      }
    })
  }

}
