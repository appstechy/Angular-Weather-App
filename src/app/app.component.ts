import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './weather_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){}
  
  weatherData?: WeatherData;

  cityName: string = "Chandigarh";

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){

    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) =>{
        console.log(response);
        this.weatherData = response;
        // console.log("Model-",this.weatherData.name)
      }
    })

  }




}
