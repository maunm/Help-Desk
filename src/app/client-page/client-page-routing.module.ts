import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { UpdateIssueComponent } from './components/update-issue/update-issue.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ViewIssueComponent } from './components/view-issue/view-issue.component';
import { SessionGuard } from '../session.guard';

const routes: Routes = [
  { path: 'create-issue', component: CreateIssueComponent, canActivate: [SessionGuard]},
  { path: 'create-note', component: CreateNoteComponent, canActivate: [SessionGuard]},
  { path: 'issues-list', component: IssuesListComponent, canActivate: [SessionGuard]},
  { path: 'notes-list', component: NotesListComponent, canActivate: [SessionGuard]},
  { path: 'update-issue', component: UpdateIssueComponent, canActivate: [SessionGuard]},
  { path: 'update-note', component: UpdateNoteComponent, canActivate: [SessionGuard]},
  { path: 'view-issue/:id', component: ViewIssueComponent, canActivate: [SessionGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule { }
