import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubSectionModuleRoutingModule } from './sub-section-module-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SubSectionModuleRoutingModule
  ]
})
export class SubSectionModuleModule { }
