import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public count: number = 0;

  // subject method for add to cart count
  public countSub$: BehaviorSubject<any> = new BehaviorSubject(0);

  // set method for count value
  setVal() {
    this.count++;
    this.countSub$.next(this.count);
  }

  // get method from setval function for count value
  getVal() {
    return this.countSub$.asObservable();
  }
}
