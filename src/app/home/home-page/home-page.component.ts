import { Component } from '@angular/core';
import { Page } from './page.model';
import { pages } from '../costants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  pages: Page[] = pages;

  constructor(private router: Router) {}

  goToHomepage() {
    this.router.navigate(['/homepage']);
  }

}
