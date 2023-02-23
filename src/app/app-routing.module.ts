import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DynamicpageComponent } from './dynamicpage/dynamicpage.component';
import { StaticpageComponent } from './staticpage/staticpage.component';
import { ExampleTableComponent } from './example-table/example-table.component';

const routes: Routes = [
  {
    path: '',
    component: StaticpageComponent,
    title: 'Angular Example App'
  },
  {
    path: 'dynamic',
    component: DynamicpageComponent,
    title: 'Complex Anguar Example App'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'The Angular Speed Problem'
  },
  {
    path: 'example',
    component: ExampleTableComponent,
    title: 'The Angular Speed Problem'
  },
  {
    path: 'main',
    loadChildren: () => import('./sub-section-module/sub-section-module.module').then( m => m.SubSectionModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
