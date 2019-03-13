import { BarcodeModalPage } from './../barcode-modal/barcode-modal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lowes',
  templateUrl: './lowes.page.html',
  styleUrls: ['./lowes.page.scss'],
})
export class LowesPage implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  async showBarCode(barcodenum) {
    const modal = await this.modal.create({
      component: BarcodeModalPage,
      componentProps: { value: barcodenum }
    });

    await modal.present();
  }
}
