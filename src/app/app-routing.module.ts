import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponentComponent } from './rxjs-operators/components/second-component/second-component.component';
import { RxjsOperatorsComponent } from './rxjs-operators/components/rxjs-operators/rxjs-operators.component';
import { AddEmployeeComponent } from './rxjs-operators/components/add-employee/add-employee.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-component'
  },
  {
    path: 'first-component',
    component: RxjsOperatorsComponent
  },
  {
    path: 'second-test',
    component: SecondComponentComponent
  },
  {
    path: 'form',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
