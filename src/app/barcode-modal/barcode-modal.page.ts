import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode-modal',
  templateUrl: './barcode-modal.page.html',
  styleUrls: ['./barcode-modal.page.scss'],
})
export class BarcodeModalPage implements OnInit {

  barCodeValue: any;
  constructor(private modal: ModalController, private navParam: NavParams) {

  }

  ngOnInit() {
    this.barCodeValue = this.navParam.get('value');
  }

  dismiss() {
    this.modal.dismiss();
  }
}
