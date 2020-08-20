import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-tilegenerator',
  templateUrl: './tilegenerator.component.html',
  styleUrls: ['./tilegenerator.component.scss']
})
export class TilegeneratorComponent implements OnInit {

  @Input() list: any;
  @Input() id: any;

  public name: string;
 public movieList:any;
  constructor(private ser:AppService) { }

  ngOnInit(): void {
    console.log(this.id);
    this.ser.fetchMovie(this.id).subscribe(data => {
         
      this.movieList = data.results
    });
  }

}
