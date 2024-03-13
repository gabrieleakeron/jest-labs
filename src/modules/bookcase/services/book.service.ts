import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private readonly httpClient:HttpClient) { }

  createBook(book: Book): Observable<any> {
    return this.httpClient
      .post('url/create-book', book)
      .pipe(
        map((x:any)=> x.data),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.message);
        }),
      );
  }

  findById(bookId: string): Observable<Book> {
    return this.httpClient
      .get(`url/books/${bookId}`)
      .pipe(
        map((x:any)=> x.data),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.message);
        }),
      );
  }

}
