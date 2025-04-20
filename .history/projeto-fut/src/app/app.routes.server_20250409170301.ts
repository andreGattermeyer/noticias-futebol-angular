import { RenderMode, ServerRoute } from '@angular/ssr';
import { PartidasComponent } from './partidas/partidas.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'partidas',
    render: (PartidasComponent) => PartidasComponent,
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
