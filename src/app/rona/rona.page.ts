import { Component, OnInit } from '@angular/core';
import { BarcodeModalPage } from '../barcode-modal/barcode-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rona',
  templateUrl: './rona.page.html',
  styleUrls: ['./rona.page.scss'],
})
export class RonaPage implements OnInit {

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
