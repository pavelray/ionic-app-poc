import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PurchaseHistoryPage } from './purchase-history.page';
import { SearchPopoverPage } from '../search-popover/search-popover.page';

const routes: Routes = [
  {
    path: '',
    component: PurchaseHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PurchaseHistoryPage, SearchPopoverPage],
  entryComponents: [SearchPopoverPage]
})
export class PurchaseHistoryPageModule {}
