import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PartidasComponent } from './partidas/partidas.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { TimesComponent } from './times/times.component';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // If AppComponent is standalone, include it here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
