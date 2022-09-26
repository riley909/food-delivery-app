import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Matching Found',
  };
  isLoading: boolean;
  query: any;
  allRestaurants = [
    {
      uid: '12wefdss',
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
      uid: '12wefdsd',
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
      uid: '12wefdsa',
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
  restaurants = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event) {
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = this.allRestaurants.filter((el) =>
          el.shortName.includes(this.query)
        );
        console.log(this.restaurants);
        this.isLoading = false;
      }, 3000);
    }
  }
}
