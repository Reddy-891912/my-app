import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  searchText: any;

  public products: any = [
    { productName: 'pen', price: 10, rating: 3, freeDelivery: true },
    { productName: 'phone', price: 5, rating: 4, freeDelivery: false },
    { productName: 'shirt', price: 200, rating: 5, freeDelivery: true },
    { productName: 'cap', price: 300, rating: 6, freeDelivery: false },
    { productName: 'mobile case', price: 100, rating: 7, freeDelivery: true },
    { productName: 'remote', price: 20, rating: 8, freeDelivery: false }
  ]

  freeDelivery() {
    this.products = this.products.filter((product: any) =>
      product.freeDelivery
    )
  }

  priceLowToHigh() {
    this.products = this.products.sort((a: any, b: any) => a.price - b.price);
  }

  priceHighToLow() {
    this.products = this.products.sort((a: any, b: any) => b.price - a.price);
  }

  rateLowToHigh() {
    this.products = this.products.sort((a: any, b: any) => a.rating - b.rating);
  }

  rateHighToLow() {
    this.products = this.products.sort((a: any, b: any) => b.rating - a.rating);
  }

  applyDiscount() {
    this.products = this.products.map((product: any) => {
      product.price /= 2;
      return product;
    });
  }

  priceWithDeliveryCharges() {
    this.products = this.products.map((product: any) => {
      product.price += 45;
      return product;
    });
  }

  totalPrice() {
    var total = this.products.reduce((sum: any, product: any) => sum + product.price, 0)
    alert(total);
  }

  totalCartItems() {
    var totalCartItems = this.products.length;
    alert(totalCartItems);
  }

}
