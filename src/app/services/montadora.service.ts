import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MontadoraService {
  private apiUrl = 'http://localhost:8080/senac-20241-backend-exemplos/rest/montadora';

  constructor(private http: HttpClient) { }

  getMontadoras(): Observable<any> {
    return this.http.get(`${this.apiUrl}/montadoras`);
  }

  getEstoqueCarros(idMontadora: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/estoque-carros/${idMontadora}`);
  }
}
