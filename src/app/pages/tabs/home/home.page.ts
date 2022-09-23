import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners = [];
  restaurants = [];

  constructor() {}

  ngOnInit() {
    this.banners = [
      { banner: 'assets/imgs/1.jpg' },
      { banner: 'assets/imgs/2.jpg' },
      { banner: 'assets/imgs/3.jpg' },
    ];

    this.restaurants = [
      {
        cover: 'assets/imgs/1.jpg',
        name: 'Stayfit',
        shortName: 'stayfit',
        cuisines: ['Italian', 'Mexican'],
        rating: 4,
        deliveryTime: 25,
        distance: 3.5,
        price: 100,
      },
      {
        cover: 'assets/imgs/2.jpg',
        name: 'Stayfit1',
        shortName: 'stayfit1',
        cuisines: ['Italian', 'Mexican'],
        rating: 5,
        deliveryTime: 25,
        distance: 0,
        price: 100,
      },
      {
        cover: 'assets/imgs/3.jpg',
        name: 'Stayfit2',
        shortName: 'stayfit2',
        cuisines: ['Italian', 'Mexican'],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100,
      },
    ];
  }
}
