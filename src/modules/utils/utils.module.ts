import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';



@NgModule({
  declarations: [
    ShortenPipe
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule { }
