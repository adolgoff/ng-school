import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upcomingFilter',
})

export class UpcomingFilter implements PipeTransform {
public transform(date: string): boolean {
    return Date.parse(date) > new Date().getTime();
  }
}