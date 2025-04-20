import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasHojeComponent } from './partidas-hoje/partidas-hoje.component';


const routes: Routes = [
  { path: '', redirectTo: '/partidas-hoje', pathMatch: 'full' },
  { path: 'partida', component: PartidasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
