import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  receivedData: string = '';

  constructor(private _dataService: DataService) {

  }
  ngOnInit(): void {

    this._dataService.dataChanged$.subscribe((data: string) => {
      this.receivedData = data;
    });
  }
}
