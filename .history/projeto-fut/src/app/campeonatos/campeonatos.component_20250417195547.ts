import { Component } from '@angular/core';
import { CampeonatosDestaqueComponent } from '../campeonatos-destaque/campeonatos-destaque.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-campeonatos',
  imports: [
    CampeonatosDestaqueComponent,
    FooterComponent],
  templateUrl: './campeonatos.component.html',
  styleUrl: './campeonatos.component.css'
})
export class CampeonatosComponent {

}
