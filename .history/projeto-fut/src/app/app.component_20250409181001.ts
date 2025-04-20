import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { PartidasHojeComponent } from './partidas-hoje/partidas-hoje.component';
import { CampeonatosDestaqueComponent } from './campeonatos-destaque/campeonatos-destaque.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { PartidasComponent } from './partidas/partidas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    PartidasHojeComponent,
    CampeonatosDestaqueComponent,
    NoticiasRecentesComponent,
    PartidasComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projeto-fut';
}
