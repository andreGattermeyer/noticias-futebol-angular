import { RenderMode, ServerRoute } from '@angular/ssr';
import { }

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
