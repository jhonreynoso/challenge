import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsPageComponent } from './stats-page.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { MainPageRoutingModule } from './stats-routing.module';
import { AddComponent } from './components/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RankCardComponent } from './components/rank-card/rank-card.component';


@NgModule({
  declarations: [
    StatsPageComponent,
    AddComponent,
    ListComponent,
    RankCardComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbTreeGridModule,
    NbButtonModule,
    NbSelectModule
  ]
})
export class StatsModule { }
