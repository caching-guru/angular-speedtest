import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicpageComponent } from './dynamicpage/dynamicpage.component';
import { StaticpageComponent } from './staticpage/staticpage.component';
import { EscapedPipe } from './escaped.pipe';
import { ExampleTableComponent } from './example-table/example-table.component';
import { InMemoryDataService } from './Services/in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    DynamicpageComponent,
    StaticpageComponent,
    AboutComponent,
    EscapedPipe,
    ExampleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
