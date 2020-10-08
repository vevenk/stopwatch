import {Injectable} from '@angular/core';
import {TimeFilterPipe} from './time-filter.pipe';

export interface Stopwatch {
  id: number;
  title: string;
  time: number;
  toggle: boolean;
  interval;
}

@Injectable({providedIn: 'root'})

export class StopwatchesService {

  constructor(private timeFilter: TimeFilterPipe) {
  }

  public stopwatches: Stopwatch[] = [
    {id: 0, title: 'Stopwatch ', time: 0, toggle: false, interval: 0}
  ];

  addStopwatch(): void {
    this.stopwatches.push({id: this.stopwatches.length, title: 'Stopwatch ', time: 0, toggle: false, interval: 0});
  }

  startStopwatch(id: number): void {
    const idx = this.stopwatches.findIndex(t => t.id === id);
    for (const item of this.stopwatches) {
      if (item.id === idx) {
        item.toggle = true;
        item.interval = setInterval(() => {
          item.time++;
        }, 10);
      } else {
        clearInterval(item.interval);
        item.toggle = false;
      }
    }
  }

  stopStopwatch(id: number): void {
    clearInterval(this.stopwatches[id].interval);
    this.stopwatches[id].toggle = false;
  }

  showSummaryTime(): void {
    let sumTime = 0;
    for (const item of this.stopwatches) {
      clearInterval(item.interval);
      item.toggle = false;
      sumTime += item.time;
    }
    alert('Total amount of time: ' + this.timeFilter.transform(sumTime));
  }
}
