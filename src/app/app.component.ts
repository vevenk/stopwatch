import {Component} from '@angular/core';

export interface Stopwatch {
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stopwatches: Stopwatch[] = [
    {title: 'Stopwatch '}
  ];

  addStopwatch(): void {
    this.stopwatches.push({title: 'Stopwatch '});
  }
}
