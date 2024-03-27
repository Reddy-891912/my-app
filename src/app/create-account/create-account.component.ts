import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private _AccountsService: AccountsService) { }

  public accountForm: FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl()
    }
  )

  submit() {
    console.log(this.accountForm.value);
    this._AccountsService.createAccounts(this.accountForm.value).subscribe(
      (data: any) => {
        alert("Account Created Successfully");
        this.accountForm.reset();
      },
      (err: any) => {
        alert("Account Creation Failed");
      }
    )
  }

}
