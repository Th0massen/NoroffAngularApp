import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-list-card',
  templateUrl: './job-list-card.component.html',
  styleUrls: ['./job-list-card.component.scss']
})
export class JobListCardComponent implements OnInit {

  constructor() { }

  @Input() job_data = {};

  ngOnInit() {
    console.log('Job list displayed.')
  }

}
