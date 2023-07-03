import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StatsEntity } from '../enum/stats.enum';
import { StatsForm } from '../models/stats.model';
import { NbaStatsValidator } from 'src/app/shared/utils/form-validators';


@Injectable({
  providedIn: 'root'
})
export class StatsFormService {

  constructor(private _fb: FormBuilder) { }


  createStatsForm(): FormGroup<StatsForm> {
    return this._fb.group<StatsForm>({
      id: new FormControl<number | null>(null, [NbaStatsValidator.required]),
      first_name: new FormControl<string | null>("", [NbaStatsValidator.required]),
      last_name: new FormControl<string | null>("", [NbaStatsValidator.required]),
      position: new FormControl<string | null>("", [NbaStatsValidator.required]),
      points_per_game: new FormControl<number | null>(null, [NbaStatsValidator.required]),
      assists_per_game: new FormControl<number | null>(null, [NbaStatsValidator.required]),
      rebounds_per_game: new FormControl<number | null>(null, [NbaStatsValidator.required]),
    });
  }

}


