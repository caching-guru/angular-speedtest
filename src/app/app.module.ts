import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicpageComponent } from './dynamicpage/dynamicpage.component';
import { StaticpageComponent } from './staticpage/staticpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicpageComponent,
    StaticpageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
