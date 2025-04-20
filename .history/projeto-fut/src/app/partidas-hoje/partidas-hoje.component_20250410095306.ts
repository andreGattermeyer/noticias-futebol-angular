import { Component } from '@angular/core';

@Component({
  selector: 'app-partidas-hoje',
  templateUrl: './partidas-hoje.component.html',
})
export class PartidasHojeComponent {
  // Lista de partidas com dados e estado de edição
  partidas = [
    {
      campeonato: 'Brasileirão Série A',
      horario: '19:00',
      timeCasa: { nome: 'Flamengo', imagem: 'assets/times/nacional/Flamengo/Flamengo HD.png' },
      timeVisitante: { nome: 'Palmeiras', imagem: 'assets/times/nacional/Palmeiras/Palmeiras HD.png' },
      estadio: 'Maracanã',
      isEditing: false, // Estado de edição do card
    },
    {
      campeonato: 'Champions League',
      horario: '15:45',
      timeCasa: { nome: 'Barcelona', imagem: 'img/barcelona.png' },
      timeVisitante: { nome: 'Bayern', imagem: 'img/bayern.png' },
      estadio: 'Camp Nou',
      isEditing: false,
    },
    {
      campeonato: 'Premier League',
      horario: '11:30',
      timeCasa: { nome: 'Liverpool', imagem: 'img/liverpool.png' },
      timeVisitante: { nome: 'Man. City', imagem: 'img/mancity.png' },
      estadio: 'Anfield',
      isEditing: false,
    },
  ];

  // Habilitar o modo de edição para uma partida específica
  startEditing(partida: any) {
    partida.isEditing = true;
  }

  // Salvar alterações e desabilitar o modo de edição
  saveChanges(partida: any) {
    partida.isEditing = false;
  }
}
