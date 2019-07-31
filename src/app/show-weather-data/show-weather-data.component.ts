import { Component, OnInit, Input } from '@angular/core';
import { FetchDataFromServerService } from '../fetch-data-from-server.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-show-weather-data',
  templateUrl: './show-weather-data.component.html',
  styleUrls: ['./show-weather-data.component.css']
})
export class ShowWeatherDataComponent implements OnInit {

  cityName: string = '';
  weatherData;
  errorMessage: string = 'PLEASE INPUT A PROPER CITY NAME';

  constructor(private service: FetchDataFromServerService) {

    this.weatherData = {
      temp:null,
      humidity:null,
      temp_min: null,
      temp_max: null
    }
  }

  ngOnInit() {

  }

  searchCityByname() {

    if(this.cityName === ''){
      window.alert(this.errorMessage);
      return 0;
    }
    this.service.findWeather(this.cityName).subscribe(
      resp => {
        const data2 = JSON.parse(JSON.stringify(resp));
        this.weatherData = {
          temp: Number.parseInt(data2.main.temp)-273,
          humidity: Number.parseInt(data2.main.humidity),
          temp_min: Number.parseInt(data2.main.temp_min) - 273,
          temp_max: Number.parseInt(data2.main.temp_max) - 273
        }
      
      });
      
  }
}
