import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }

  Cors:string = 'https://cors-anywhere.herokuapp.com/';
  workData:string = 'https://jobs.github.com/positions.json?search=javascript'; 

  getJobList(){
    console.log('Retrieving Job list...')
    return this.http.get(this.Cors + this.workData);
  }
}
