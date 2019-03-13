import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  wallets: any;

  constructor() { }

  ngOnInit() {
    this.wallets = [
      {
        name : 'Lowes',
        img: 'lowes.png',
        link: '/tabs/lowes'
      },
      {
        name : 'Rona',
        img: 'rona.png',
        link: '/tabs/rona'
      },
      {
        name:  'Reno',
        img: 'reno-depot.png',
        link: '/tabs/reno'
      }
    ];
  }

}
