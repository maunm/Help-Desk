import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientPageRoutingModule } from './client-page-routing.module';
import { RouterModule } from '@angular/router';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { UpdateIssueComponent } from './components/update-issue/update-issue.component';
import { ViewIssueComponent } from './components/view-issue/view-issue.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';


@NgModule({
  declarations: [CreateIssueComponent, IssuesListComponent, UpdateIssueComponent, ViewIssueComponent, CreateNoteComponent, NotesListComponent, UpdateNoteComponent],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CreateIssueComponent,
    IssuesListComponent,
    UpdateIssueComponent,
    ViewIssueComponent,
    CreateNoteComponent,
    NotesListComponent,
    UpdateNoteComponent
  ],
})
export class ClientPageModule { }
