import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, mergeMap } from 'rxjs/operators';
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
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(400),
      map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value),
      mergeMap(title => this._bookStoreService.getBookTitles(title))
    )
    .subscribe(bookTitles => console.log(bookTitles))
  }

  ngOnInit(): void {
  }

}
