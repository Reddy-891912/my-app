import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {

  public flipcartProducts: any = [];

  constructor(private _flipcartService: FlipcartService) {
    _flipcartService.getFlipcartService().subscribe(
      (data: any) => {
        this.flipcartProducts = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
}
