import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupporterIssuesListComponent } from './components/supporter-issues-list/supporter-issues-list.component';


const routes: Routes = [
  { path: 'supporter/issues-list', component: SupporterIssuesListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupporterPageRoutingModule { }
