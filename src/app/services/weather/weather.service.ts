import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {
    
  }

  Cors:string = 'https://cors-anywhere.herokuapp.com/';
  weatherData:string = 'https://www.metaweather.com/api/location/862592/'; 

  getWeatherData(){
    return this.http.get(this.Cors + this.weatherData);
  }
}
