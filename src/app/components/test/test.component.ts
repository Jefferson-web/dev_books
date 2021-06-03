import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take, mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  long$ = interval(1000).pipe(take(4));
  short$ = interval(500).pipe(take(4))

  constructor() { }

  ngOnInit(): void {
    this.long$.pipe(
      mergeMap(long => {
        console.log('Long Activado');
        return this.short$.pipe(map(short => console.log({ long, short })))
      })
    )
    .subscribe();
  }

}
