import { RenderMode, ServerRoute } from '@angular/ssr';
import { PartidasComponent } from './partidas/partidas.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'partidas',
    component: PartidasComponent,
    renderMode: RenderMode.Prerender
  }
];
