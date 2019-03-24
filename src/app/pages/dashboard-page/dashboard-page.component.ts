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

  showData:string = '';
  value:number;

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

  displayCryptoData(){
    this.showData = 'crypto';
    if( this.cryptoCurrency.length < 1 ){
      this.crypto.getCryptoData().subscribe( (response:any) =>{
        this.cryptoCurrency = response.data.coins;
      }), error => {
        console.error(error);
      }
    }
  }

  displayTvSchedule(){
    this.showData = 'tv schedule';
    if( this.tvData.length < 1){
      this.tv.getTvSchedule().subscribe( (response:any) =>{
        this.tvData = response;
      }), error => {
        console.log(error)
      }
    }
  }

  displayJobs(){
    this.showData = 'jobs';
    if( this.tvData.length < 1){
      this.jobs.getJobList().subscribe( (response:any) =>{
        console.log(response);
        this.jobData = response;
      }), error => {
        console.log(error)
      }
    }
  }

}
