import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros/carros.component';

@NgModule({
  declarations: [
    CarrosComponent

  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
