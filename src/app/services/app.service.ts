import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  fetchGenre() {
    return this.http.get<any>('https://api.themoviedb.org/3/genre/movie/list',{
      params: {
        api_key:"68e82445c8842ba8616d0f6bf0e97a41" 
      }
  });
  }

  fetchMovie(genreiId) {
    console.log(genreiId,"ser");
    const movies = "movies"
    return this.http.get<any>(`https://api.themoviedb.org/3/genre/${genreiId}/${movies}`, {
      params: {
        api_key:"68e82445c8842ba8616d0f6bf0e97a41" 
      }}
    );
  }
  fetchMovieDetail(movieId) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieId}
    `,{
      params: {
        api_key:"68e82445c8842ba8616d0f6bf0e97a41" 
 
      }});
  }
}
