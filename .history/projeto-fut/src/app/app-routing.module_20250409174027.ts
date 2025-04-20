import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasComponent } from './partidas/partidas.component';


const routes: Routes = [
  { path: '', redirectTo: 'partidas', pathMatch: 'full' }, // Remove the leading slash
  { path: 'partidas', component: PartidasComponent },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
