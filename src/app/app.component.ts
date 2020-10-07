import {Component} from '@angular/core';
import {StopwatchesService} from './shared/stopwatches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public stopwatchesService: StopwatchesService) {
  }
}
