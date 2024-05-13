import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros/carros.component';
import { MontadoraComponent } from './carros/montadora/montadora.component';

@NgModule({
  declarations: [
    CarrosComponent,
    MontadoraComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
