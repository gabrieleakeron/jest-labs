import { Component, OnInit, inject } from '@angular/core';
import { MoviesStore } from '../services/movie.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MoviesStore]
})
export class MoviesComponent implements OnInit {

  title:string = null;

  store = inject(MoviesStore);

  movies$: Observable<string[]> = this.store.movies$;

  ngOnInit() {
    this.store.getMovies();
  }

  addMovie() {
    if (this.title) {
      this.store.addMovie(this.title);
    }
  }
}