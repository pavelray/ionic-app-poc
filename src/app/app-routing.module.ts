import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },
  { path: 'stores', loadChildren: './stores/stores.module#StoresPageModule' },
  { path: 'lowes', loadChildren: './lowes/lowes.module#LowesPageModule' },
  { path: 'rona', loadChildren: './rona/rona.module#RonaPageModule' },
  { path: 'barcode-modal', loadChildren: './barcode-modal/barcode-modal.module#BarcodeModalPageModule' },
  { path: 'purchase-history', loadChildren: './purchase-history/purchase-history.module#PurchaseHistoryPageModule' },
  { path: 'search-popover', loadChildren: './search-popover/search-popover.module#SearchPopoverPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
