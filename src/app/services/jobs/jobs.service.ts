import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }

  Cors:string = 'https://cors-anywhere.herokuapp.com/';
  workData:string = 'http://api.dataatwork.org/v1/jobs'; 

  getJobList(){
    return this.http.get(this.Cors + this.workData);
  }
}
