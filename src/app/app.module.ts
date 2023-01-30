import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicpageComponent } from './dynamicpage/dynamicpage.component';
import { StaticpageComponent } from './staticpage/staticpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicpageComponent,
    StaticpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
