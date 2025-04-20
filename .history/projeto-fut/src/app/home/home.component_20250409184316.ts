import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PartidasHojeComponent } from "../partidas-hoje/partidas-hoje.component";
import { HeroComponent } from "../hero/hero.component";
import { NoticiasRecentesComponent } from "../noticias-recentes/noticias-recentes.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, PartidasHojeComponent, HeroComponent, NoticiasRecentesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
