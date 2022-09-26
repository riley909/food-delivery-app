import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  id: any;
  data: any = {};
  items = [];
  restaurants = [
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

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    // restaurantId 가져오기
    this.route.paramMap.subscribe((paraMap) => {
      if (!paraMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      // id 변수에 담는다
      this.id = paraMap.get('restaurantId');
    });
    this.getItems();
  }

  getItems() {
    this.data = {};

    // 레스토랑 목록에서 id 일치하는 항목만 가져옴
    this.data = this.restaurants.filter((el) => el.uid === this.id);
  }
}
