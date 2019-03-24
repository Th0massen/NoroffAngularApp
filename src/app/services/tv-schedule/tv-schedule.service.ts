import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvScheduleService {

  constructor(private http:HttpClient) { }

  Cors:string = 'https://cors-anywhere.herokuapp.com/';
  tvData:string = 'http://api.tvmaze.com/schedule'; 

  getTvSchedule(){
    return this.http.get(this.Cors + this.tvData);
  }

}
