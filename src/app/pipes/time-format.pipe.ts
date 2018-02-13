import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})

export class TimeFormat implements PipeTransform {
public transform(minutes: number): string {
    const min: number = minutes % 60;
    const minString: string = min < 10 ? `0${min}` : min.toString();
    const hours: number = Math.floor(minutes/60); 
    return (hours ? `${hours}h ${minString}` : minString) + 'min';
  }
}