import { Component, OnInit } from '@angular/core';
import { MontadoraService } from '../services/montadora.service';

@Component({
  selector: 'app-montadoras',
  templateUrl: './montadoras.component.html',
  styleUrls: ['./montadoras.component.css']
})
export class MontadorasComponent implements OnInit {
  montadoras: any[] = [];
  selectedMontadora: number | null = null;
  estoque: number | null = null;

  constructor(private montadoraService: MontadoraService) { }

  ngOnInit(): void {
    this.montadoraService.getMontadoras().subscribe({
      next: (data) => this.montadoras = data,
      error: (erro) => alert('Erro ao carregar montadoras: ' + err)
    });
  }

  onMontadoraChange() {
    this.estoque = null; // Reset estoque information on montadora change
  }

  consultarEstoque() {
    if (this.selectedMontadora === null) {
      alert('Selecione uma montadora');
      return;
    }

    this.montadoraService.getEstoqueCarros(this.selectedMontadora).subscribe({
      next: (data) => this.estoque = data,
      error: (erro) => alert('Erro ao consultar o estoque: ' + err)
    });
  }
}
