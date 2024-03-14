import { TestBed } from '@angular/core/testing';

import { take } from 'rxjs';
import { MoviesStore } from '../../app/movies/movie.store';

describe('MoviesComponent', () => {

  let store: MoviesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        MoviesStore
      ]
    });

    store = TestBed.inject(MoviesStore);
  });

  it('testing a selector', (done) => {
    //Given
    const movies: string[] = ['Titanic', 'Harry Potter', 'Lord Of The Rings'];
    //Then
    store.patchState({ movies });
    //When
    store.movies$.pipe(take(1)).subscribe({
      next: (m: string[]) => {
        expect(m.length).toBe(movies.length);
        done();
      },
    });
  });
});
