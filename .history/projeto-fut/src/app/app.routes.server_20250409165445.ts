import { RenderMode, ServerRoute } from '@angular/ssr';
import { P}

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
