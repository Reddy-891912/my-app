import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-create-bike',
  templateUrl: './create-bike.component.html',
  styleUrls: ['./create-bike.component.css']
})
export class CreateBikeComponent {

  constructor(private _bikesService: BikesService) { }

  public bikeForm: FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl()
    }
  )

  submit() {
    console.log(this.bikeForm.value);
    this._bikesService.createCar(this.bikeForm.value).subscribe(
      (dat: any) => {
        alert("created succssfully");
        this.bikeForm.reset(); //after submit form data reset function
      },
      (err: any) => {
        alert("creation failed");
      }
    )
  }

}
