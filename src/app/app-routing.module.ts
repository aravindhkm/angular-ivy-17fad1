import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './crud/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }