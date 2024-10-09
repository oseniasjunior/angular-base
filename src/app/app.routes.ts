import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {DepartmentComponent} from './department/department.component';
import {DepartmentItemComponent} from './department/department-item/department-item.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: MainComponent, children: [
      {path: 'department', component: DepartmentComponent},
      {path: 'department/:action', component: DepartmentItemComponent},
    ]
  },
];
