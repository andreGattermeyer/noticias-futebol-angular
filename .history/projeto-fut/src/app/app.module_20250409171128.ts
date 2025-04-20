import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PartidasComponent } from './partidas/partidas.component';
// Other imports

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartidasComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
