import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent removed from declarations as it's standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent // Added to imports instead
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
