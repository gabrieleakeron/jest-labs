import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from '../../app/movies/components/movies.component';
import { MoviesStore } from '../../app/movies/services/movie.store';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';

describe('Testing the storage', () => {

    let component: MoviesComponent;
    let fixture: ComponentFixture<MoviesComponent>;

    let mockMoviesStore!: { getMovies: jest.Mock, addMovie: jest.Mock }; // the mock value

    beforeEach(() => {
        mockMoviesStore = {
            getMovies: jest.fn(),
            addMovie: jest.fn()
          };

        TestBed.configureTestingModule({
            declarations: [MoviesComponent],
            imports: [DxTextBoxModule,DxButtonModule],
        });
        TestBed.overrideProvider(MoviesStore, { useValue: mockMoviesStore });
        fixture = TestBed.createComponent(MoviesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('ngOnInit() lifecycle hook', () => {
        it('should call the moviesStore.getMovies() method', () => {
            component.ngOnInit();
            expect(mockMoviesStore.getMovies).toHaveBeenCalled();
        });
    });

    describe('addMovie() method', () => {
        it('should call the moviesStore.addMovie() method with value from the form control', () => {
            const movie = 'Fake movie title';
            component.title = movie;
            component.addMovie();
            expect(mockMoviesStore.addMovie).toHaveBeenCalledWith(movie);
        });
    });
});