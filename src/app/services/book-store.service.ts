import { Injectable } from '@angular/core';
import { Book } from 'src/book';
import { BOOKS } from 'src/mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  bookList : Book[] = BOOKS;

  constructor() { }

  getBooks(){
    return this.bookList;
  }

  getBook(isbn: number){
    let book = this.bookList.find(book => book.isbn === isbn);
    return book;
  }

  deleteBook(isbn:number){
    this.bookList = this.bookList.filter(book => book.isbn !== isbn);
    return this.bookList;
  }

}
