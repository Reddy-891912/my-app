import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cartCount: number = 0;

  constructor(private _commonService: CommonService) {
    this._commonService.getVal().subscribe(
      (data: any) => {
        this.cartCount = data;
      }
    )
  }

  ngOnIt(): void { }
}
