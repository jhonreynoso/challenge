import { EventEmitter, Injectable } from '@angular/core';
import { PlayerPositionList } from '../mocks/positions.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  dataSource = PlayerPositionList;

  constructor() { }

  getPositions() {
    return of(this.dataSource);
  }

}
