import { Component, OnInit } from '@angular/core';

export interface Carta {
  id: number;
  nome: string;
  forca: number;
  inteligencia: number;
  velocidade: number;
  dataCadastro: Date;
}

@Component({
  selector: 'app-cartas-listagem',
  templateUrl: './cartas-listagem.component.html',
  styleUrl: './cartas-listagem.component.scss'
})
export class CartasListagemComponent implements OnInit {

  public cartas: Carta[] = [
    {id: 1, nome: 'Pelé', forca: 5, inteligencia: 5, velocidade: 5, dataCadastro: new Date()},
    {id: 2, nome: 'Luciano K.', forca: 2, inteligencia: 5, velocidade: 3, dataCadastro: new Date()},
    {id: 3, nome: 'CR7', forca: 5, inteligencia: 3, velocidade: 4, dataCadastro: new Date()},
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
