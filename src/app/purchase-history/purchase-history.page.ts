import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SearchPopoverPage } from '../search-popover/search-popover.page';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.page.html',
  styleUrls: ['./purchase-history.page.scss'],
})
export class PurchaseHistoryPage implements OnInit {
  ListItem = [
            {Date: '1 Aug 2018', Business: 'Hamilton', Sales: '$500.00', Rewards: '$50.00'},
            {Date: '1 Aug 2018', Business: 'Brantford', Sales: '$645.99', Rewards: '$43.21'},
            {Date: '1 Aug 2018', Business: 'Hamilton', Sales: '$500.00', Rewards: '$50.00'},
            {Date: '1 Aug 2018', Business: 'Brantford', Sales: '$645.99', Rewards: '$43.21'},
            {Date: '1 Aug 2018', Business: 'Hamilton', Sales: '$500.00', Rewards: '$50.00'},
            {Date: '1 Aug 2018', Business: 'Brantford', Sales: '$645.99', Rewards: '$43.21'},
            {Date: '1 Aug 2018', Business: 'Hamilton', Sales: '$500.00', Rewards: '$50.00'},
            {Date: '1 Aug 2018', Business: 'Brantford', Sales: '$645.99', Rewards: '$43.21'},
            {Date: '1 Aug 2018', Business: 'Hamilton', Sales: '$500.00', Rewards: '$50.00'},
            {Date: '1 Aug 2018', Business: 'Brantford', Sales: '$645.99', Rewards: '$43.21'}
  ];

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showSearch() {
    const popover = await this.popoverController.create({
      component: SearchPopoverPage,
      translucent: true
    });
    return await popover.present();
  }
}
