import { Component, OnInit } from '@angular/core';
import { Stats } from '../../models/stats.model';
import { StatsEntity } from '../../enum/stats.enum';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { StatsService } from '../../services/stats.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  customColumn = StatsEntity.FIRST_NAME;
  defaultColumns = [StatsEntity.LAST_NAME, StatsEntity.POSITION, StatsEntity.POINTS_PER_GAME, StatsEntity.REBOUNDS_PER_GAME, StatsEntity.ASSISTS_PER_GAME];
  allColumns = [this.customColumn, ...this.defaultColumns];
  dataSource: any;

  sortColumn: any;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  _data: any;

  constructor(private _dataSourceBuilder: NbTreeGridDataSourceBuilder<Stats>, private _statsService: StatsService) {
  }

  ngOnInit() {
    this.getData()
  }


  getData() {
    this._statsService.getStats().subscribe(stats => {
      this._data = stats;
      this.buildGridData();
    })

  }

  buildGridData() {
    this.dataSource = this._dataSourceBuilder.create(this._data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

