import { RenderMode, ServerRoute } from '@angular/ssr';
import { Parti}

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
