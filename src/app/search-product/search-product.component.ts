import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {fromEvent} from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { BookStoreService } from '../services/book-store.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput') searchInput: ElementRef;
  bookTitles: Array<string>;

  constructor(private _bookStoreService: BookStoreService) { }

  ngAfterViewInit(): void {
    const  searchInput$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(400),
      map((event: KeyboardEvent) => (<HTMLInputElement> event.target).value)
    )
    searchInput$.subscribe(title => {
      this._bookStoreService
          .getBookTitles(title)
          .subscribe(bookTitles => this.bookTitles = bookTitles)
    });
  }

  ngOnInit(): void {
  }

}
