import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasComponent } from './partidas/partidas.component';

const routes: Routes = [
  { path: '', redirectTo: '/partidas', pathMatch: 'full' }, // Redireciona para partidas
  { path: 'partidas', component: PartidasComponent }, // Define a rota para PartidasComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
