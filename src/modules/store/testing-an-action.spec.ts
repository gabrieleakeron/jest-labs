import { TestBed } from "@angular/core/testing";
import { MoviesState, MoviesStore } from "../../app/movies/movie.store";
import { skip, take } from "rxjs";

describe('testing an action', () => {
    let store: MoviesStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
          providers:[
            MoviesStore
          ]
        });
    
        store = TestBed.inject(MoviesStore);
      });

    it('should update the movies state with the added movie', (done) => {
      // Given
      const movie = 'Fake movie title';
  
      // Then
      store.state$.pipe(skip(1), take(1)).subscribe({
        next: (state: MoviesState) => {
          expect(state.movies).toEqual([movie]);
          done();
        },
      });
  
      // When
      store.addMovie(movie);
    });
  });