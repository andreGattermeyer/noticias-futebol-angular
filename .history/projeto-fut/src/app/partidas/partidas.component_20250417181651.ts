import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { PartidasHojeComponent } from "../partidas-hoje/partidas-hoje.component";


@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.css'],
  imports: [FooterComponent, PartidasHojeComponent],

})
export class PartidasComponent {
}
