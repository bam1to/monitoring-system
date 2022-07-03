import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: unknown): string {
    if (value === 0) {
      return 'green';
    }
    if (value === 1) {
      return 'orange';
    }
    if (value === 2) {
      return 'red';
    }
    return '';
  }

}
