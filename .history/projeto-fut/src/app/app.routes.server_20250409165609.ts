import { RenderMode, ServerRoute } from '@angular/ssr';
import { PartidasComponent } from './partidas/partidas.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    path: ''
    renderMode: RenderMode.Prerender
  }
];
