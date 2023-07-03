import { Component, OnInit } from '@angular/core';
import { StatsFormService } from '../../services/stats-form.service';
import { FormGroup } from '@angular/forms';
import { Stats, StatsForm } from '../../models/stats.model';
import { PlayerPosition, StatsEntity, StatsFormLabels } from '../../enum/stats.enum';
import { StatsService } from '../../services/stats.service';
import { StatsFormAdapterService } from '../../services/stats-form-adapter.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  label = StatsFormLabels;
  form: any = {} as FormGroup<StatsForm>
  statsEntity = StatsEntity;
  positions: string[] = []

  constructor(private _statsFormService: StatsFormService, private _statsService: StatsService, private _statsFormAdapterService: StatsFormAdapterService, private _commmonService: CommonService) {

  }

  ngOnInit(): void {
    this.form = this._statsFormService.createStatsForm();
    this.getPositions()

  }

  saveForm() {
    this._statsService.saveStats(this._statsFormAdapterService.formToDto(this.form.value));
    this._statsService.getStats().subscribe(stats => {
    })
    this.form.reset();
  }

  getPositions() {
    this._commmonService.getPositions().subscribe(positions => this.positions = positions)
  }
}

