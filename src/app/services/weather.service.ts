import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../weather_model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string):Observable<WeatherData>{

    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'/city/'+cityName,
    { headers: new HttpHeaders()
      .set(environment.XRapidAPIHostName,environment.XRapidAPIHostValue)
    .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
  })
  }
}
