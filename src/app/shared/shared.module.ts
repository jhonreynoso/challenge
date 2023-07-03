import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NbMenuModule } from '@nebular/theme';
import { GridTitlePipe } from './pipes/grid-title.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    GridTitlePipe,

  ],
  imports: [
    CommonModule,
    NbMenuModule

  ],
  exports: [
    NavbarComponent, GridTitlePipe
  ]
})
export class SharedModule { }
