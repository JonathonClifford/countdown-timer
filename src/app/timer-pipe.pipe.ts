import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerPipe'
})
export class TimerPipePipe implements PipeTransform {

  transform(value: number): string {
    let tempString: string = value.toString();
    if (tempString.length < 2) {
      return "0" + tempString;
    } else {
      return tempString;
    }
  }

}
