import { Injectable } from '@angular/core';
import { Stats, StatsForm } from '../models/stats.model';
import { TreeNode } from 'src/app/shared/models/tree-node.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StatsFormAdapterService {


  formToDto({
    id,
    first_name,
    last_name,
    position,
    points_per_game,
    assists_per_game,
    rebounds_per_game
  }: FormGroup<StatsForm>['value']): TreeNode<Stats> {
    return {
      data: {
        id: id ?? 0,
        first_name: first_name ?? '',
        last_name: last_name ?? '',
        position: position ?? '',
        points_per_game: points_per_game ?? 0,
        assists_per_game: assists_per_game ?? 0,
        rebounds_per_game: rebounds_per_game ?? 0,
      }
    };
  }
}
