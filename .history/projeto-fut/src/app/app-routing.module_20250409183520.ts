import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartidasComponent } from './partidas/partidas.component';
import { CampeonatosComponent } from '';
import { TimesComponent } from './times/times.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
