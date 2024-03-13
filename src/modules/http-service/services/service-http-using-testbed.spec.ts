import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest, } from '@angular/common/http/testing';
import { Book } from '../models/book.model';
import { BookService } from './book.service';
import { EsitoEnum, SaveResult } from '../models/save-result.model';

describe('ServiceHttpExample using TestBed', () => {
  
  let service: BookService;
  let http: HttpClient;
  let controller: HttpTestingController; 

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookService
      ]
    });

    service = TestBed.inject(BookService);
    http = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);

  });

  it('testing a get method', () => {

    const expectedData: Book[] = [
      { id: 'id1', title: 'Title 1' },
      { id: 'id2', title: 'Title 2' }
    ];

    service.findAll().subscribe((data) => {
      expect(data.length).toBe(2);
    });

    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url: [service.baseUrl, service.BOOKS].join('/'),
    });

    request.flush(expectedData); 
   
  })

  it('testing a post method', () => {
      
      const book: Book = { id: 'id1', title: 'Title 1' };
      
      const expectedResult:SaveResult = { esito: EsitoEnum.SUCCESS, message: 'Salvataggio avvenuto correttamente' };
  
      service.createBook(book).subscribe((saveResult) => {
        expect(saveResult.esito).toBe(EsitoEnum.SUCCESS);
        expect(saveResult.message).toBe(true);
      });
  
      const request: TestRequest = controller.expectOne({
        method: 'POST',
        url: [service.baseUrl, '123-xyz', service.CREATE_BOOK].join('/'),
      });
  
      request.flush(expectedResult); 
    
    })

  
});
