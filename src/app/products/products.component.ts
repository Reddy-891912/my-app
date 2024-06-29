import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private _commonService: CommonService) { }

  ngOnIt(): void { }

  add() {
    this._commonService.setVal();
  }

}
