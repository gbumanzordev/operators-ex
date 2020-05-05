import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOperatorsModule } from './rxjs-operators/rxjs-operators.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxjsOperatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
