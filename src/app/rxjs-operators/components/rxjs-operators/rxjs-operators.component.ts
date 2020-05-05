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
  firstSubscription$: Subscription;
  secondSubscription$: Subscription;
  constructor() {
    setInterval(() => {
      this.emitter$.next(this.emitter$.value + 1);
    }, 1000);
  }

  ngOnInit(): void {
    this.firstSubscription$ = this.emitter$.subscribe((increasedNumber) => {
      this.currentValue = increasedNumber;
      console.log(increasedNumber);
    });

    this.emitter$.subscribe((increased) => {
      console.log(`Exponential ${increased ** 2}`);
    });
  }

  ngOnDestroy() {
    this.firstSubscription$.unsubscribe();
  }
}
