
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartidasComponent } from './partidas/partidas.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { TimesComponent } from './times/times.component';

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'partidas', component: PartidasComponent },
  {path: 'campeonatos', component: CampeonatosComponent },
  {path: 'times', component: TimesComponent },
];
