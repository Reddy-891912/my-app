import { Component } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent {

  public gmailProducts: any = [];

  constructor(private _GmailService: GmailService) {
    this._GmailService.getGmailService().subscribe(
      (data: any) => {
        this.gmailProducts = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
}
