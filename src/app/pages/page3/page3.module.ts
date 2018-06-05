import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content/content.component';
import {Page3Component} from './page3.component';
import {Page3RouteModule} from './page3-route.module';


@NgModule({
  imports: [
    CommonModule,
    Page3RouteModule
  ],
  declarations: [
    Page3Component,
    ContentComponent
  ]
})
export class Page3Module {
}
