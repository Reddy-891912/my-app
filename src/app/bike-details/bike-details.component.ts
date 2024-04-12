import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent {

  public id: any = "";
  public bike: any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _bikeService: BikesService) {
    this._activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;
        console.log(this.id);
        //apo call
        this._bikeService.getCars1(this.id).subscribe(
          (data: any) => {
            this.bike=data;
          },
          (err:any)=>{
            alert("internal server error");
          }
        )
      }
    )
  }

}
