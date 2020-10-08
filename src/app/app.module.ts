import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StopwatchComponent} from './stopwatch/stopwatch.component';
import {TimeFilterPipe} from './shared/time-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    TimeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TimeFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
