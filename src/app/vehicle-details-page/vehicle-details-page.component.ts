import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-vehicle-details-page',
  templateUrl: './vehicle-details-page.component.html',
  styleUrls: ['./vehicle-details-page.component.css']
})
export class VehicleDetailsPageComponent {

  // public id: any = "";
  // public vehicle:any={};
  // constructor(private _activatedRoute: ActivatedRoute, private _bikesService:BikesService) {
  //   this._activatedRoute.params.subscribe(
  //     (data: any) => {
  //       this.id = data.id;
  //       console.log(this.id);
  //       // api call
  //       this._bikesService.getCars1(this.id).subscribe(
  //         (data:any)=>{
  //           this.vehicle=data;
  //         },
  //         (err:any)=>{
  //           alert("internal server error");
  //         }
  //       )
  //     }
  //   )
  // }

}
