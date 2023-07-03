import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout-page.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NbLayoutModule,
    NbSidebarModule,
    NbEvaIconsModule

  ]
})
export class LayoutModule { }
