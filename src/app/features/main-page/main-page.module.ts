import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NbCardModule

  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
