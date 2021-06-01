import { Injectable } from '@angular/core';
import { Book } from 'src/book';
import { BOOKS } from 'src/mock-books';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  bookList: Book[] = BOOKS;

  constructor() { }

  getBooks() {
    return this.bookList;
  }

  getBook(isbn: number) {
    let book = this.bookList.find(book => book.isbn === isbn);
    return book;
  }

  deleteBook(isbn: number) {
    this.bookList = this.bookList.filter(book => book.isbn !== isbn);
    return this.bookList;
  }

  searchBooks(title: string): Observable<Book[]> {
    return of(this.filterBooks(title));
  }

  getBookTitles(title: string): Observable<string[]> {
    return of(this.filterBooks(title).map(book => book.title));
  }

  filterBooks(title: string) {
    return title ? this.bookList.filter(book => new RegExp(title, 'gi').test(book.title)) : [];
  }

}
