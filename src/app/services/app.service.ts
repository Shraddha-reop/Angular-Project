import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  storeNav(date, amount, scheme) {
    console.log(date, amount, scheme, "ser");

    return this.http.post<any>(`https://demo6335756.mockable.io/storeNav `, { date:date, amount:amount, scheme:scheme });
  }

  getSheme() {
    return this.http.get<any>(``);
  }
}
