import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pin: new FormControl()
    }),
    cards: new FormArray([])
  })

  get cardFormsArray() {
    return this.userForm.get('cards') as FormArray;
  }

  add() {
    this.cardFormsArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl()
      })
    )
  }

  delete(i: number) {
    this.cardFormsArray.removeAt(i);
  }

  submit() {
    console.log(this.userForm);
  }

}
