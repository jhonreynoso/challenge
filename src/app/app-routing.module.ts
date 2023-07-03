import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './features/layout/layout-page.component';

const MAIN_ROUTE_SEGMENT = 'main-page';
const STATS_ROUTE_SEGMENT = 'stats-page';

const routes: Routes = [
  { path: '', redirectTo: 'stats-page', pathMatch: 'full' },
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: MAIN_ROUTE_SEGMENT,
        loadChildren: () =>
          import('./features/main-page/main-page.module').then((m) => m.MainPageModule)

      },
      {
        path: STATS_ROUTE_SEGMENT,
        loadChildren: () =>
          import('./features/stats/stats.module').then((m) => m.StatsModule)

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
