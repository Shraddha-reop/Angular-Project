import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistscreenComponent } from './components/movielistscreen/movielistscreen.component';
import { MoviedetailscreenComponent } from './components/moviedetailscreen/moviedetailscreen.component';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { MovieComponent } from './components/movie/movie.component';


const routes: Routes = [
  {
    path: 'movie-list-sceen',
    component: MovielistscreenComponent
  },
  {
    path: 'movie-detail-sceen',
    component: MoviedetailscreenComponent
  },
  {
    path: 'movie-card',
    component: MoviecardComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
