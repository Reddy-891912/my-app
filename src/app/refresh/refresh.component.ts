import { Component } from '@angular/core';
import { RefreshService } from '../refresh.service';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent {

  public refresh: any = [];

  constructor(private _refreshService: RefreshService) {
    _refreshService.getRefresh().subscribe(
      (data: any) => {
        this.refresh = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }

  buttonRefresh() {
    this._refreshService.getRefresh().subscribe(
      (data: any) => {
        this.refresh = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
  
}
