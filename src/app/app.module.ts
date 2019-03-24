import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './services/auth/auth.service';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { WeatherService } from './services/weather/weather.service';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoCardComponent } from './components/crypto-card/crypto-card.component';
import { CryptoCurrencyService } from './services/crypto/crypto-currency.service';
import { TvScheduleCardComponent } from './components/tv-schedule-card/tv-schedule-card.component';
import { TvScheduleService } from './services/tv-schedule/tv-schedule.service';
import { JobListCardComponent } from './components/job-list-card/job-list-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    DashboardPageComponent,
    WeatherCardComponent,
    CryptoCardComponent,
    TvScheduleCardComponent,
    JobListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    WeatherService,
    CryptoCurrencyService,
    TvScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
