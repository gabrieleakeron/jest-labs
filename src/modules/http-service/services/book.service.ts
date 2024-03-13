import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from '../models/book.model';
import { SaveResult } from '../models/save-result.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public readonly baseUrl = 'http://localhost:3000';
  readonly BOOKS = 'books';
  readonly CREATE_BOOK = 'create-book';

  constructor(private readonly httpClient:HttpClient) { }

  findAll(): Observable<Book[]>{
    return this.httpClient.get<Book[]>([this.baseUrl, this.BOOKS].join('/'))
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.message);
      }),
    );
  }

  createBook(book: Book): Observable<SaveResult> {
    let bookId = '123-xyz';
    return this.httpClient
      .post<SaveResult>([this.baseUrl,bookId,this.CREATE_BOOK].join('/'), book)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error.message);
        }),
      );
  }

}
