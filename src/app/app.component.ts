import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Book } from 'src/book';
import { BookStoreService } from './services/book-store.service';
import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('btn') btn: MatButton;
  @ViewChild('input') input: ElementRef;
  booksList: Book[];
  selectedBook: Book;

  constructor(private _bookStoreService: BookStoreService) {}

  ngAfterViewInit(): void {
    const btnOb$ = fromEvent(this.btn._elementRef.nativeElement, 'click').pipe(
      map((event: Event) => 'Rxjs in Action')
    )
    /* btnOb$.subscribe((res) => console.log(res)); */

    const inputObs$ = fromEvent(this.input.nativeElement, 'keyup').pipe(
      map((event: Event) => (<HTMLInputElement>event.target).value)
    );
    /* inputObs$.subscribe((res) => console.log(res)); */

    merge(btnOb$, inputObs$).subscribe(res => console.log(res));
      
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
