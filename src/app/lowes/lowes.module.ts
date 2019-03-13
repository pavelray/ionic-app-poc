import { BarcodeModalPage } from './../barcode-modal/barcode-modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LowesPage } from './lowes.page';

const routes: Routes = [
  {
    path: '',
    component: LowesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LowesPage, BarcodeModalPage],
  entryComponents: [BarcodeModalPage]
})
export class LowesPageModule {}
