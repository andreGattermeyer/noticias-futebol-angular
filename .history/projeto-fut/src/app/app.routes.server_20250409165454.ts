import { RenderMode, ServerRoute } from '@angular/ssr';
import { Partidas}

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
