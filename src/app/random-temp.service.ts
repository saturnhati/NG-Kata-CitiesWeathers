import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomTempService {
  constructor() {}

  getRandomTemperature() {
    let randomTemp: number = Math.floor(Math.random() * (40 - -10 + 1) + -10);
    return randomTemp;
  }
}
