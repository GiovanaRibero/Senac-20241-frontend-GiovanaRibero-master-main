import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private baseUrl = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro/filtro';

  constructor(private http: HttpClient) { }

  getCarros(filtro: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, filtro);
  }
}
