import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Book } from 'src/book';
import { BookStoreService } from './services/book-store.service';
import { fromEvent, merge, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  constructor(){}

}
