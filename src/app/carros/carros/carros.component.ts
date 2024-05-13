// src/app/components/carros/carros.component.ts
import { Component, OnInit } from '@angular/core';
import { Carro } from '../../models/carro';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {
  carros: Carro[] = [];
  filtro = {
    modelo: '',
    nomeMarca: '',
    anoInicial: null,
    anoFinal: null
  };

  constructor(private carroService: CarroService) {}

  ngOnInit() {
    this.consultarCarros();
  }

  consultarCarros() {
    this.carroService.getCarros(this.filtro).subscribe({
      next: (data) => {
        this.carros = data;
        if (this.carros.length === 0) {
          alert('Nenhum veículo encontrado');
        }
      },
      error: (error) => {
        console.error('Erro ao buscar carros:', error);
        alert('Erro ao buscar carros. Verifique o console para mais detalhes.');
      }
    });
  }
}
