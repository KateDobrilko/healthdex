import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseStatsService {

  constructor() {
  }

  getPercentStripeClass(percent: Number) {
    if (percent < 60) {
      return 'red';
    }
    if (percent >= 60 && percent < 90) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  getPercentStripeWidth(tableElement: ElementRef, percent: number) {
    if (percent === 100) {
      return tableElement.nativeElement.clientWidth * 0.6;
    } else if (percent > 100) {
      return tableElement.nativeElement.clientWidth * 0.65;
    } else {
      return tableElement.nativeElement.clientWidth * 0.6 * percent / 100;
    }
  }
}
