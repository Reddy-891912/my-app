import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { cvv, tcsMail } from './validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email, tcsMail]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pin: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(1000000)])
    }),
    cards: new FormArray([]),
    type: new FormControl()
  })

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'daysScholor') {
          // add bus fees
          this.userForm.addControl('busFees', new FormControl());
          // remove hostel fees
          this.userForm.removeControl("hostelFee");
        }
        else {
          // add hostel fees
          this.userForm.addControl('hostelFee', new FormControl());
          // remove bus fees
          this.userForm.removeControl("busFees");
        }
      }
    )
  }

  get cardFormsArray() {
    return this.userForm.get('cards') as FormArray;
  }

  add() {
    this.cardFormsArray.push(
      new FormGroup({
        number: new FormControl(null, [Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999)]),
        expiry: new FormControl(),
        cvv: new FormControl(null, [Validators.required, Validators.maxLength(3), Validators.minLength(3),cvv])
      })
    )
  }

  delete(i: number) {
    this.cardFormsArray.removeAt(i);
  }

  submit() {
    // this.userForm.markAllAsTouched();
    console.log(this.userForm);
  }

}
