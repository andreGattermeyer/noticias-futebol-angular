import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasComponent } from './partidas/partidas.component';
// Import other components as needed

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent }, // Commented out until HomeComponent is imported
  { path: 'partidas', component: PartidasComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
