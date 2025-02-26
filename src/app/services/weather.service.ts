import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=37.39&longitude=-5.99&current=temperature_2m,weathercode';

  
  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

