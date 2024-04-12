import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

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
