import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss'],
})
export class RxjsOperatorsComponent implements OnInit, OnDestroy {
  emitter$ = new BehaviorSubject(1);
  currentValue: number;
  subscription$: Subscription;
  constructor() {
    setInterval(() => {
      this.emitter$.next(this.emitter$.value + 1);
    }, 1000);
  }

  ngOnInit(): void {
    this.subscription$ = this.emitter$.subscribe((result) => {
      this.currentValue = result;
      console.log(result);
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
