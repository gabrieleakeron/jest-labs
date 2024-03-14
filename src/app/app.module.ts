import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TopBarModule } from './top-bar/top-bar.module';
import { MoviesComponent } from './movies/movies.component';
import { DxButtonComponent, DxButtonModule, DxTextBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    TopBarModule,
    AppRoutingModule,
    DxTextBoxModule,
    DxButtonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
