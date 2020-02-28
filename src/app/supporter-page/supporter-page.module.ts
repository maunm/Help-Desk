import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SupporterPageRoutingModule } from './supporter-page-routing.module';
import { RouterModule } from '@angular/router';
import { SupporterIssuesListComponent } from './components/supporter-issues-list/supporter-issues-list.component';
import { SupporterViewIssueComponent } from './components/supporter-view-issue/supporter-view-issue.component';



@NgModule({
  declarations: [SupporterIssuesListComponent, SupporterViewIssueComponent],
  imports: [
    CommonModule,
    SupporterPageRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SupporterIssuesListComponent,
  ],
})
export class SupporterPageModule { }
