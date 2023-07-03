import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import { TreeNode } from 'src/app/shared/models/tree-node.interface';
import { Stats } from '../../models/stats.model';

@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.scss']
})
export class RankCardComponent implements OnInit {

  data: TreeNode<Stats>[] = [] as TreeNode<Stats>[];
  topRebounder: string | null = '';
  topAssist: string | null = '';
  topScorer: string | null = '';

  constructor(private _statsService: StatsService) {

  }

  ngOnInit() {
    this.getData();
    this.buildRank();

  }

  getData() {
    this._statsService.getStats().subscribe(stats => {
      this.data = stats;
    })
  }

  buildRank() {
    this.topRebounder = this.findTopRebounder();
    this.topAssist = this.findTopAssist();
    this.topScorer = this.findTopScorer();
  }

  findTopRebounder = (): string | null => {
    const topRebounder = this.data.reduce((prev: TreeNode<Stats> | null, current) => (!prev || current.data.rebounds_per_game! > prev.data.rebounds_per_game!) ? current : prev, null);
    return topRebounder ? `${topRebounder.data.first_name} ${topRebounder.data.last_name}` : null;
  };

  findTopAssist = (): string | null => {
    const topAssist = this.data.reduce((prev: TreeNode<Stats> | null, current) => (!prev || current.data.assists_per_game! > prev.data.assists_per_game!) ? current : prev, null);
    return topAssist ? `${topAssist.data.first_name} ${topAssist.data.last_name}` : null;
  };

  findTopScorer = (): string | null => {
    const topScorer = this.data.reduce((prev: TreeNode<Stats> | null, current) => (!prev || current.data.points_per_game! > prev.data.points_per_game!) ? current : prev, null);
    return topScorer ? `${topScorer.data.first_name} ${topScorer.data.last_name}` : null;
  };


}
