import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartasListagemComponent } from './cartas-listagem/cartas-listagem.component';

const routes: Routes = [

  { path: '', component: CartasListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartasRoutingModule { }
