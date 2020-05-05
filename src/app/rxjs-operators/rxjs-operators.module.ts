import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { RouterModule } from '@angular/router';

const components = [RxjsOperatorsComponent, SecondComponentComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class RxjsOperatorsModule {}
