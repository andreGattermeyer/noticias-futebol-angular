import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PartidasComponent } from './partidas/partidas.component';
import { TimesComponent } from './times/times.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'partidas', component: PartidasComponent },
  { path: 'campeonatos', component: CampeonatosComponent },
  { path: 'times', component: TimesComponent },
  { path: 'noticias', component: NoticiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
