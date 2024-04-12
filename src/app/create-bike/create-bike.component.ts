import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BikesService } from '../bikes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bike',
  templateUrl: './create-bike.component.html',
  styleUrls: ['./create-bike.component.css']
})
export class CreateBikeComponent {

  public id: any = "";

  constructor(private _bikesService: BikesService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        this._bikesService.getCars1(this.id).subscribe(
          (data: any) => {
            this.bikeForm.patchValue(data);
          }
        )
      }
    )
  }

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
    if (this.id) {
      this._bikesService.editBike(this.id, this.bikeForm.value).subscribe(
        (data: any) => {
          alert("edited successfully");
          this.bikeForm.reset();
        },
        (err: any) => {
          alert("edit failed");
        }
      )
    }
    else {
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

}
