import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'timeFilter'})
export class TimeFilterPipe implements PipeTransform {

  transform(time: number): string {
    const minutes = Math.floor(time  / 6000);
    const seconds = Math.floor((time - (minutes * 6000)) / 100);
    const milliSeconds = time - (minutes * 6000) - (seconds * 100);

    let strMinutes;
    let strSeconds;
    let strMilliSeconds;

    if (minutes < 10) { strMinutes = '0' + minutes.toString(); } else { strMinutes = minutes.toString(); }
    if (seconds < 10) { strSeconds = '0' + seconds.toString(); } else { strSeconds = seconds.toString(); }
    if (milliSeconds < 10) { strMilliSeconds = '0' + milliSeconds.toString(); } else { strMilliSeconds = milliSeconds.toString(); }

    return (strMinutes + ':' + strSeconds + ':' + strMilliSeconds);
  }
}
