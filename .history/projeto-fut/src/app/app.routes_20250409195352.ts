
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartidasComponent } from './partidas/partidas.component';
import { CampionatosCompone}

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'partidas', component: PartidasComponent },
];
