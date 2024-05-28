import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LampadaComponent } from './components/lampada/lampada.component';
import { InterruptorComponent } from './components/interruptor/interruptor.component';

@NgModule({
  declarations: [
    AppComponent,
    LampadaComponent,
    InterruptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
