import {Injectable} from '@angular/core';

export interface Stopwatch {
  id: number;
  title: string;
  time: number;
  toggle: boolean;
  interval;
}

@Injectable({providedIn: 'root'})

export class StopwatchesService {

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
        }, 1000);
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
}
