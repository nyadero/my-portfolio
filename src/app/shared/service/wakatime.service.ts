import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WakatimeService {

  private apiUrl = 'https://api.wakatime.com/api/v1/';

  constructor(private http: HttpClient) { }

  getWakatimeData(): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Authorization': `Basic ${btoa(this.apiKey)}` // Encode the API key in base64
    // });

    return this.http.get(`${this.apiUrl}/users/current/stats/last_7_days`);
  }

}
