import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupportApiService } from 'src/app/services/support-api.service';
import { IssueObject } from 'src/app/classes/issueObject';

@Component({
  selector: 'app-supporter-issues-list',
  templateUrl: './supporter-issues-list.component.html',
  styleUrls: ['./supporter-issues-list.component.scss']
})
export class SupporterIssuesListComponent implements OnInit {

  constructor(public supportApiService: SupportApiService) { }

  issuesList: IssueObject [];

  ngOnInit(): void {
    this.supportApiService.getIssues().subscribe(
      data => {
        this.issuesList = data;
      }
    );
  }

}
