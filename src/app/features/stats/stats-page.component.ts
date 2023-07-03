import { Component } from '@angular/core';
import { StatsConstants } from './constants/stats.constants';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss'],
})
export class StatsPageComponent {
  lbl = StatsConstants;

  constructor(private _router: Router, private _dataService: DataService) { }

  goBack() {
    this.sendData()
    this._router.navigate(['/main-page']);
  }

  sendData(): void {
    const data =
      'Hello My friend, im sending data from StatsPageComponent cause the challenge ask me to do it..';
    this._dataService.setData(data);
  }
}
