
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartidasComponent } from './partidas/partidas.component';
import { CampionatosComponent } from './campionatos/campionatos.component';

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'partidas', component: PartidasComponent },
  {path: 'campionatos', component: CampionatosComponent },
];
