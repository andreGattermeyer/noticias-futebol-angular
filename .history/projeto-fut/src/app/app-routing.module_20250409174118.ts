import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidasComponent } from './partidas/partidas.component';


const routes: Routes = [
  Sim, a rota está quase correta para o Angular! Mas, para garantir que funcione conforme esperado, é importante confirmar algumas coisas:
- Estrutura da Rota: Certifique-se de que no arquivo de configuração das rotas (como app-routing.module.ts ou diretamente no AppModule) a rota /partidas está configurada assim:import { PartidasComponent } from './partidas/partidas.component';

const routes: Routes = [
  { path: 'partidas', component: PartidasComponent },
];

- Uso do <router-outlet>: No arquivo app.component.html ou no HTML principal que contém os componentes, você deve ter o <router-outlet> para renderizar o conteúdo associado às rotas:<app-nav></app-nav>
<router-outlet></router-outlet>

- Classe routerLinkActive: O routerLinkActive="active" está correto! Ele adicionará dinamicamente a classe CSS "active" ao link quando a rota estiver ativa. Certifique-se de que a classe está estilizada no seu CSS:nav a.active {
  font-weight: bold;
  color: yellow;
}

- Validação da Navegação: Após configurar tudo, ao clicar no link "Partidas", o Angular deve navegar para http://localhost:4200/partidas e renderizar o conteúdo do PartidasComponent.

Se mesmo assim não funcionar, pode haver um erro na configuração das rotas ou conflitos no caminho do servidor. Compartilhe detalhes adicionais, e posso ajudá-lo a ajustar isso! 😊

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
