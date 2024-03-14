import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies.component';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxButtonModule,
  ]
})
export class MoviesModule { }
