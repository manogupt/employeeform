import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';

const routes: Routes = [{path: 'dashboard', component: DashboardComponent },{path:'',component:EmployeeformComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
