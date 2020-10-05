import {Component, Input} from '@angular/core';
import {Stopwatch} from '../app.component';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {

  @Input() stopwatch: Stopwatch;
  @Input() index: number;

  title = 'Stopwatch';
  time = 0;
  interval;
  toggle = true;

  startTimer(): void {
    if (this.toggle) {
      this.interval = setInterval(() => {

        this.time++;

      }, 1000);
      this.toggle = false;
    } else {

      clearInterval(this.interval);
      this.toggle = true;
    }
  }
}
