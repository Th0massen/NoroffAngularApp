import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrencyService {

  constructor(private http:HttpClient) { }

  Cors:string = 'https://cors-anywhere.herokuapp.com/';
  cryptoData:string = 'https://api.coinranking.com/v1/public/coins'; 

  getCryptoData(){
    console.log('Analyzing market...')
    return this.http.get(this.Cors + this.cryptoData);
  }
}
