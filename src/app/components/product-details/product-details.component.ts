import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/book';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{

  @Output() onDelete = new EventEmitter<number>();
  @Input() book: Book;

  constructor() { }

  deleteBook(isbn: number){
    this.onDelete.emit(isbn);
  }

}
