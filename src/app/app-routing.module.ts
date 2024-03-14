import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ROUTES } from './home/costants';
import { MoviesComponent } from './movies/components/movies.component';

const routes: Routes = [
  {
    path: ROUTES.HOME,
    component: HomePageComponent
  },
  {
    path: ROUTES.MOVIES,
    component: MoviesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
