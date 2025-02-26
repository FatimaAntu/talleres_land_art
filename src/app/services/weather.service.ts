import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio que se encarga de obtener la información meteorológica.
 * Utiliza la API de Open Meteo para obtener datos sobre el clima actual.
 */

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    /**
   * URL de la API de Open Meteo para obtener la predicción del tiempo.
   * Incluye parámetros de latitud y longitud para la ubicación deseada.
   */
  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=37.39&longitude=-5.99&current=temperature_2m,weathercode';

   /**
   * Constructor del servicio.
   * 
   * @param http - Servicio HttpClient para realizar solicitudes HTTP.
   */
  
  constructor(private http: HttpClient) { }

  /**
   * Método para obtener la información meteorológica.
   * 
   * @returns Un observable que emite la respuesta de la API con los datos meteorológicos.
   */
  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

