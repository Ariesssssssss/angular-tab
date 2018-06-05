import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


export const ROUTES: Routes = [
  {
    path: 'page1',
    loadChildren: './pages/page1/page1.module#Page1Module',
    data: {
      title: '页面1',
      isRemove: true
    }
  },
  {
    path: 'page2',
    loadChildren: './pages/page2/page2.module#Page2Module',
    data: {
      title: '页面2',
      isRemove: true
    }
  },
  {
    path: 'page3',
    loadChildren: './pages/page3/page3.module#Page3Module',
    data: {
      title: '页面3',
      isRemove: true
    }
  }
]

@NgModule({
  imports: [ // 因为是根路由，所以使用forRoot
    RouterModule.forRoot( ROUTES )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule {
}
