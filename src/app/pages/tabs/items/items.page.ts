import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  id: any;
  data: any = {};
  items: any[] = [];
  veg = false;
  cartData = { restaurant: {}, items: [], totalPrice: 0, totalItem: 0 };
  categories: any[] = [
    {
      id: 'e00',
      name: 'Italian',
      uid: '12wefdss',
    },
    {
      id: 'e0',
      name: 'Mexican',
      uid: '12wefdss',
    },
  ];
  allItems = [
    {
      categoryId: 'e00',
      cover: 'assets/imgs/pizza.jpg',
      desc: 'Great in taste',
      id: 'i1',
      name: 'Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
    {
      categoryId: 'e0',
      cover: 'assets/imgs/salad.jpg',
      desc: 'Great in taste',
      id: 'i2',
      name: 'Caprese Salad',
      price: 200,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: true,
    },
    {
      categoryId: 'e00',
      cover: 'assets/imgs/pasta.jpg',
      desc: 'Great in taste',
      id: 'i3',
      name: 'Pasta',
      price: 150,
      rating: 0,
      status: true,
      uid: '12wefdss',
      variation: false,
      veg: false,
    },
  ];
  restaurants = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      shortName: 'stayfit',
      address: 'Karol Bagh, New Delhi',
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
      address: 'Karol Bagh, New Delhi',
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
      address: 'Karol Bagh, New Delhi',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      deliveryTime: 25,
      distance: 2.5,
      price: 100,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    // restaurantId 가져오기
    this.route.paramMap.subscribe((paraMap) => {
      if (!paraMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }

      console.log(paraMap);

      // id 변수에 담는다
      this.id = paraMap.get('restaurantId');
    });
    this.getItems();
  }

  getItems() {
    this.data = {};
    this.cartData = { restaurant: {}, items: [], totalPrice: 0, totalItem: 0 };

    // 레스토랑 목록에서 id 일치하는 항목만 가져옴
    const data = this.restaurants.filter((el) => el.uid === this.id);
    this.data = data[0];
    this.categories = this.categories.filter((el) => el.uid === this.id);
    this.items = this.allItems.filter((el) => el.uid === this.id);
  }

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

  vegOnly(event) {
    console.log(event.detail.checked);
  }

  quantityPlus(item, index) {
    try {
      // 해당 아이템의 수량이 없으면 수량을 1로 만듬
      if (!this.items[index].quantity || this.items[index].quantity === 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        // 수량이 이미 있는 경우 + 1
        this.items[index].quantity += 1;
        this.calculate();
      }
    } catch (error) {
      console.log(error);
    }
  }
  quantityMinus(item, index) {
    try {
      if (this.items[index].quantity !== 0) {
        this.items[index].quantity -= 1;
      } else {
        this.items[index].quantity = 0;
      }
      this.calculate();
    } catch (error) {
      console.log(error);
    }
  }

  calculate() {
    this.cartData.items = [];
    const item = this.items.filter((el) => el.quantity > 0);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;

    item.forEach((el) => {
      // 전체 아이템 개수
      this.cartData.totalItem += el.quantity;
      // 전체 가격
      this.cartData.totalPrice +=
        parseFloat(el.price) * parseFloat(el.quantity);
    });

    // 아이템 수량이 없으면 카트 정보 초기화
    if (this.cartData.totalItem === 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }

    console.log('cart', this.cartData);
  }

  async viewCart() {
    if (this.cartData.items && this.cartData.items.length > 0) {
      await this.saveToCart();
    }

    this.router.navigate([this.router.url + '/cart']);
  }

  saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
    } catch (error) {}
  }
}
