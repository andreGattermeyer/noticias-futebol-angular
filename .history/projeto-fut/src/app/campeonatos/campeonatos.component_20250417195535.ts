import { Component } from '@angular/core';
import { C}
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-campeonatos',
  imports: [
    CampeonatosComponent,
    FooterComponent],
  templateUrl: './campeonatos.component.html',
  styleUrl: './campeonatos.component.css'
})
export class CampeonatosComponent {

}
