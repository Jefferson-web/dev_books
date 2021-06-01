import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Book } from 'src/book';
import { BookStoreService } from '../services/book-store.service';
import {fromEvent, merge, interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('btn') btn: MatButton;
  @ViewChild('input') input: ElementRef;
  booksList: Book[];
  selectedBook: Book;
  timer$ = interval(1000).pipe(
    map(event => new Date())
  )

  constructor(private _bookStoreService: BookStoreService) {}

  ngAfterViewInit(): void {
    
   /*  const btnOb$ = fromEvent(this.btn._elementRef.nativeElement, 'click').pipe(
      map((event: Event) => 'Rxjs in Action')
    )

    const inputObs$ = fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((event: Event) => (<HTMLInputElement>event.target).value)
    );

    merge(btnOb$, inputObs$).subscribe(res => console.log(res)); */
      
  }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList() {
    this.booksList = this._bookStoreService.getBooks();
  }

  getBookDetails(isbn: number) {
    this.selectedBook = this.booksList.find((book) => book.isbn == isbn);
  }

  deleteBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.booksList.filter((book) => book.isbn !== isbn);
  }

}
