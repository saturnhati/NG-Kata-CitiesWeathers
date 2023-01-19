import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { City } from './city.class';
import { RandomTempService } from './random-temp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') form!: FormGroup;
  title = 'NG-Kata-CitiesWeathers';

  constructor(private randomTemp: RandomTempService) {}

  cityList: City[] = [
    {
      name: 'Milan',
      temperature: 15,
    },
    {
      name: 'Arequipa',
      temperature: 28,
    },
    {
      name: 'Rome',
      temperature: 18,
    },
  ];

  newCity() {
    let newCity = new City(
      this.form.value.cityName,
      this.randomTemp.getRandomTemperature()
    );
    this.cityList.push(newCity);
    this.form.reset();
  }
}
