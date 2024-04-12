import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoTaskViewService {

  constructor() { }

  public toDo: string = "";
  public toDoSub$: BehaviorSubject<any> = new BehaviorSubject("");

  toDoSetText() {
    // this.toDo;
    this.toDoSub$.next(this.toDo);
  }

  toDoGetVal() {
    return this.toDoSub$.asObservable();
  }
  
}
