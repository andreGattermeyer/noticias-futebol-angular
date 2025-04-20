import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasComponent } from './partidas/partidas.component';
// Import your home component or other components as needed

const routes: Routes = [
  { path: '', component: /* Your home component here */ },
  { path: 'partidas', component: PartidasComponent },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
