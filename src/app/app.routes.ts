import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
const routes: Routes = [
    { path: '', redirectTo: 'carros', pathMatch: 'full' },
    {
        path: 'carros',
        loadChildren: () => import('./carros/carros.module').then(m => m.CarrosModule)
    }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent 
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
