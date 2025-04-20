import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";
import { PartidasHojeComponent } from "./partidas-hoje/partidas-hoje.component";
import { CampeonatosDestaqueComponent } from "./campeonatos-destaque/campeonatos-destaque.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, PartidasHojeComponent, CampeonatosDestaqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-fut';
}
