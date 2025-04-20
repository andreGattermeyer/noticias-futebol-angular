import { RenderMode, ServerRoute } from '@angular/ssr';
import { Par}

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
