import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  constructor(private _AccountsService: AccountsService) {
    _AccountsService.getAccounts().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internet Server Error");
      }
    )
  }

  public term: string = '';
  public accounts: any = [];


  filter() {
    this._AccountsService.getAccounts1(this.term).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }








}
