import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.scss']
})
export class CryptoCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Displaying crypto market data')
  }

  @Input() crypto_data = {};

}
