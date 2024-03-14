import { TestBed } from "@angular/core/testing";
import { MoviesState, MoviesStore } from "../../app/movies/services/movie.store";
import { of, skip, take, throwError } from "rxjs";
import { MoviesService } from "../../app/movies/services/movies.service";

describe('testing an effect', () => {
  let store: MoviesStore;
  let moviesServiceSpy!: { getMovies: jest.Mock }; // the mock value

  beforeEach(() => {

    moviesServiceSpy = {
      getMovies: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers:[
        MoviesStore,
        { provide: MoviesService, useValue: moviesServiceSpy}
      ]
    });
   
    store = TestBed.inject(MoviesStore);
  });
  
    it('should update the state with the returned movies', (done) => {

      // Given
      const movies: string[] = ['Titanic', 'Harry Potter', 'Lord Of The Rings'];
      moviesServiceSpy.getMovies.mockReturnValue(of(movies));
      // Then
      store.state$.pipe(skip(1), take(1)).subscribe({
        next: (state: MoviesState) => {
          expect(state.movies).toEqual(movies);
          done();
        },
      });
      // When
      store.getMovies();
    });
  
    it('should update the state with an error message if an error occurs', (done) => {
      // Given
      const error = 'An error occurred';
      moviesServiceSpy.getMovies.mockReturnValue(
        throwError(() => new Error(error))
      );
      // Then
      store.state$.pipe(skip(1), take(1)).subscribe({
        next: (state: MoviesState) => {
          expect(state.moviesError).toEqual(error);
          done();
        },
      });
      // When
      store.getMovies();
    });
  });