import { Injectable } from '@angular/core';
import { rowData } from '../mocks/stats.mock';
import { TreeNode } from 'src/app/shared/models/tree-node.interface';
import { Stats } from '../models/stats.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  dataSource = rowData;
  private dataSourceSubject = new BehaviorSubject<TreeNode<Stats>[]>(this.dataSource);
  dataSource$: Observable<TreeNode<Stats>[]> = this.dataSourceSubject.asObservable();

  constructor() { }

  getStats(): Observable<TreeNode<Stats>[]> {
    return this.dataSource$;
  }

  saveStats(stats: TreeNode<Stats>) {
    this.dataSource.push(stats);
    this.dataSourceSubject.next(this.dataSource);
  }
}
