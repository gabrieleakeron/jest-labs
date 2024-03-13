import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Book } from '../models/book.model';

describe('BookService', () => {
  let service: BookService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookService,
        { provide: HttpClient, useValue: { get: jest.fn(), post: jest.fn() } },
      ],
    });

    service = TestBed.inject(BookService);
    http = TestBed.inject(HttpClient);
  });

  it('should call getBook method and return results', () => {
    const getBookResponse = {
      data: [{ id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }]
    };

    const response = of({ a: getBookResponse });
    const expected = of({ b: getBookResponse.data });
    http.get = jest.fn(() => response);

    expect(service.findById('123-xyz')).resolves.toBe(getBookResponse.data);
  })

  it('should call getBook method and return Error Response', () => {

    const error = { message: 'error' } as HttpErrorResponse;

    const response = cold('#', { a: error });

    http.get = jest.fn(() => throwError(() => error));

    expect(service.findById('123-xyz')).;
  });

  it('should call createBook method - Success Response', () => {
    const createBookArg: Book = {
      id: 'Test Book',
      title: 'Test Book'
    };
    const createBookResponse = {
      data: {
        message: 'Book Created Successfully'
      },
    };

    const response = cold('-a|', { a: createBookResponse });
    const expected = cold('-b|', { b: createBookResponse.data });
    http.post = jest.fn(() => response);

    expect(service.createBook(createBookArg)).toBeObservable(expected);
  });

  it('should call createBook method - Error response', () => {
    const createBookArg: Book = {
      id: 'Test Book',
      title: 'Test Book'
    };

    const error = { message: 'error' } as HttpErrorResponse;

    const response = cold('#', { a: error });

    http.post = jest.fn(() => throwError(() => error));

    expect(service.createBook(createBookArg)).toBeObservable(response);
  });
});
