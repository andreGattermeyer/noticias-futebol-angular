import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasComponent } from './partidas-hoje/partidas.component';


const routes: Routes = [
  { path: '', redirectTo: '/partidas-hoje', pathMatch: 'full' },
  { path: 'partidas', component: PartidasHojeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
