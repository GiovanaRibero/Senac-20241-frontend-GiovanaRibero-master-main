// src/app/services/carro.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Carro } from '../models/carro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private url = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro/filtro'; // URL do seu endpoint

  constructor(private http: HttpClient) {}

  getCarros(filtro: any): Observable<Carro[]> {
    // Chamada real da API
    return this.http.post<Carro[]>(this.url, filtro);
  }
}
