import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { IssueObject } from 'src/app/classes/issueObject';

@Component({
  selector: 'app-supporter-issues-list',
  templateUrl: './supporter-issues-list.component.html',
  styleUrls: ['./supporter-issues-list.component.scss']
})
export class SupporterIssuesListComponent implements OnInit {

  constructor(public authService: AuthService) { }

  servicesList: IssueObject [];

  ngOnInit(): void {
    this.authService.getIssues().subscribe(
      data => {
        this.servicesList = data;
      }
    );
  }

}
