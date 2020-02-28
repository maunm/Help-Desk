import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupporterIssuesListComponent } from './components/supporter-issues-list/supporter-issues-list.component';
import { SessionGuard } from '../session.guard';
import { SupporterViewIssueComponent } from './components/supporter-view-issue/supporter-view-issue.component';


const routes: Routes = [
  { 
    path: 'supporter/issues-list', 
    component: SupporterIssuesListComponent,
    canActivate: [SessionGuard]
  },
  { 
    path: 'supporter/view-issue/:id', 
    component: SupporterViewIssueComponent,
    canActivate: [SessionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupporterPageRoutingModule { }
