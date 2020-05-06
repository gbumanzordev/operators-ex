import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  RxjsOperatorsComponent,
  SecondComponentComponent,
  AddEmployeeComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...components],
})
export class RxjsOperatorsModule {}
