import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import {retry,catchError} from 'rxjs/operators';
import { WeatherData } from './weather-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFromServerService {

 
  constructor(private http : HttpClient) { }
  private apiObject = "http://api.openweathermap.org/data/2.5/weather?q="; //API ACTUAL LINK
  private apiKey = "&APPID=cc9f6f60e57645be41685af7d4cba1dc" //CHANGE HERE FOR THE KEY
  
  findWeather(cityName: string): Observable<WeatherData>{
   
    return this.http.get<WeatherData>(this.apiObject+cityName+this.apiKey)
    .pipe(retry(1),
    catchError(this.handleError));
      
  
    }


// ERROR HANDLING

handleError(error){

  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // server-side error
    errorMessage = `ERROR CODE: ${error.status}\nMESSAGE: CHECK THE VALUES, YOU HAVE INSERTED`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);

}

  }

 

