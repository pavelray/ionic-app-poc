import { PurchaseHistoryPageModule } from './../purchase-history/purchase-history.module';
import { RonaPageModule } from './../rona/rona.module';
import { LowesPageModule } from './../lowes/lowes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'stores',
        children: [
          {
            path: '',
            loadChildren: '../stores/stores.module#StoresPageModule'
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: '../offers/offers.module#OffersPageModule'
          }
        ]
      },
      {
        path: 'lowes',
        children: [
          {
            path: '',
            loadChildren: '../lowes/lowes.module#LowesPageModule'
          }
        ]
      },
      {
        path: 'rona',
        children: [
          {
            path: '',
            loadChildren: '../rona/rona.module#RonaPageModule'
          }
        ]
      },
      {
        path: 'pruchase',
        children: [
          {
            path: '',
            loadChildren: '../purchase-history/purchase-history.module#PurchaseHistoryPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
