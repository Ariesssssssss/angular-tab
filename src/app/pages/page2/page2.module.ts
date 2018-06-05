import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content/content.component';
import {Page2Component} from './page2.component';
import {Page2RouteModule} from './page2-route.module';


@NgModule({
  imports: [
    CommonModule,
    Page2RouteModule
  ],
  declarations: [
    Page2Component,
    ContentComponent
  ]
})
export class Page2Module {
}
