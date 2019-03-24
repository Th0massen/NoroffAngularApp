import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tv-schedule-card',
  templateUrl: './tv-schedule-card.component.html',
  styleUrls: ['./tv-schedule-card.component.scss']
})
export class TvScheduleCardComponent implements OnInit {

  constructor() { }

  @Input() tv_data = {};

  ngOnInit() {
    console.log('Displaying Tv Schedule.')
  }

}
