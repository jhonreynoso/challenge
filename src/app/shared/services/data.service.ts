import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  defaultMessage = "I'm supposed to change when someone sends something.. now im just a default message..and the guy bellow is just a loremp ipsum";
  dataChanged$: BehaviorSubject<string> = new BehaviorSubject<string>(this.defaultMessage);


  constructor() {
  }


  setData(data: string): void {
    this.dataChanged$.next(data);
  }
}
