import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { CryptoCurrencyService } from 'src/app/services/crypto/crypto-currency.service';
import { TvScheduleService } from 'src/app/services/tv-schedule/tv-schedule.service';
import { JobsService } from 'src/app/services/jobs/jobs.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  /* Dev joke:
    You never get mutli-threaded issues, if you only have one thread.  
  */

  // Global variables
  showData:string = '';
  showMenu:boolean = false;

  // Storing data recieved from api's, so they dont have to fetch every time the component is rendered
  weatherData:any[] = []; 
  cryptoCurrency:any[] = [];
  tvData:any[] = [];
  jobData:any[] = [];

  constructor(
    private weather: WeatherService,
    private crypto: CryptoCurrencyService,
    private tv: TvScheduleService,
    private jobs: JobsService
  ) { }

  ngOnInit() {}

  // Hide and show menu on smaller devices
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  // Simulate when a user sign out
  signOut(){
    localStorage.removeItem('auth-token');
    window.location.reload();
  }

  // Weather component data handler
  displayWeather(){
    this.showData = 'weather';
    if( this.weatherData.length < 1 ){
      this.weather.getWeatherData().subscribe( (response:any) => {
        this.weatherData = response.consolidated_weather;
      }, error => {
        console.error(error);
      });
    }
  }

  // Crypto component data handler
  displayCryptoData(){
    this.showData = 'crypto';
    if( this.cryptoCurrency.length < 1 ){
      this.crypto.getCryptoData().subscribe( (response:any) =>{
        this.cryptoCurrency = response.data.coins;
        console.log(this.cryptoCurrency);
      }), error => {
        console.error(error);
      }
    }
  }

  // Tv component data handler
  displayTvSchedule(){
    this.showData = 'tv schedule';
    if( this.tvData.length < 1){
      this.tv.getTvSchedule().subscribe( (response:any) =>{
        this.tvData = response;
        console.log('There is an issue where a few of the returned objects dont have an image, therefore the error below')
      }), error => {
        console.error(error)
      }
    }
  }

  // Job component data handler
  displayJobs(){
    this.showData = 'jobs';
    if( this.jobData.length < 1){
      this.jobs.getJobList().subscribe( (response:any) =>{
        console.log(response);
        this.jobData = response;
      }), error => {
        console.error(error)
      }
    }
  }

}
