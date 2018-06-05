import {NgModule} from '@angular/core';
import {Page1Component} from './page1.component';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content/content.component';
import {Page1RouteModule} from './page1-route.module';


@NgModule({
  imports: [
    CommonModule,
    Page1RouteModule
  ],
  declarations: [
    Page1Component,
    ContentComponent
  ]
})
export class Page1Module {
}
