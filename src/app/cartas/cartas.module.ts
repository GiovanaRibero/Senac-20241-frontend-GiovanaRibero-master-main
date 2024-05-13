import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { CartasListagemComponent } from './cartas-listagem/cartas-listagem.component';


@NgModule({
  declarations: [
    CartasListagemComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule
  ]
})
export class CartasModule { }
