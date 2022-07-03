import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  constructor() { }

  setBorderColor(status: number): string {
    let borderColor = '';
    switch (status) {
      case 2: {
        borderColor = 'red';
        break;
      }
      case 1: {
        borderColor = 'orange';
        break;
      }
      case 0: {
        borderColor = 'green';
        break;
      }
    }
    return borderColor;
  }
}
