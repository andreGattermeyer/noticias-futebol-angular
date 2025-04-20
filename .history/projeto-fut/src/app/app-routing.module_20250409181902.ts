import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import
// Import other components
 import { PartidasComponent } from './partidas/partidas.component';
// import { CampeonatosComponent } from './campeonatos/campeonatos.component';
// import { TimesComponent } from './times/times.component';
// import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // Add routes for other components
  // { path: 'partidas', component: PartidasComponent },
  // { path: 'campeonatos', component: CampeonatosComponent },
  // { path: 'times', component: TimesComponent },
  // { path: 'noticias', component: NoticiasComponent },
  { path: '**', redirectTo: '' } // Redirect to home for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
