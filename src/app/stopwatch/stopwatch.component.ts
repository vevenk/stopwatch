import {Component} from '@angular/core';
import {StopwatchesService} from '../shared/stopwatches.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {

  constructor(public stopwatchesService: StopwatchesService) {
  }
}
