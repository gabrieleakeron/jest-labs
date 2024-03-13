import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { HomePageComponent } from '../home/home-page/home-page.component';



@NgModule({
  declarations: [
    TopBarComponent,
    HomePageComponent
  ],
  imports: [
    DxButtonModule,
    CommonModule,
    RouterModule 
  ],
  exports: [
    TopBarComponent
  ]
})
export class UiModule { }
