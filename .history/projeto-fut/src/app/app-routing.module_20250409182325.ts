import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { PartidasComponent } from './partidas/partidas.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { TimesComponent } from './times/times.component';
import { NoticiasComponent } from './noticias/noticias.component';

@Component({
  selector: 'app-home',
  template: '<div>Home Component</div>'
})
export class HomeComponent {}

// Import other components


const routes: Routes = [
  { path: '', component: AppComponent },
  // Add routes for other components
   { path: 'partidas', component: PartidasComponent },
   { path: 'campeonatos', component: CampeonatosComponent },
   { path: 'times', component: TimesComponent },
   { path: 'noticias', component: NoticiasComponent },
  { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
