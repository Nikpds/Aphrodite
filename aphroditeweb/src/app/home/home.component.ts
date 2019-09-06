import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  targetDay = new Date('2019-07-13');
  timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  interval = null;
  constructor() { }

  ngOnInit() {
    this.targetDay.setUTCHours(15, 0, 0);
    this.getSnapshotOfTime();
    this.interval = setInterval(() => {
      this.getSnapshotOfTime();
    }, 1000);
  }

  getSnapshotOfTime() {
    const now = new Date().getTime();
    const distance = this.targetDay.getTime() - now;
    if (distance < 0) {
      clearInterval(this.interval);
      return;
    }
    this.timeLeft = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }

}
