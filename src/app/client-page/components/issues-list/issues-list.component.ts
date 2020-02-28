import { Component, OnInit } from '@angular/core';
import { ClientApiService } from 'src/app/services/client-api.service';
import { IssueObject } from 'src/app/classes/issueObject';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {

  constructor(public clientApiService: ClientApiService) { }

  issuesList: IssueObject [];

  ngOnInit(): void {
    this.clientApiService.getIssues().subscribe(
      data => {
        // Filter the issues to send only the user submited issued.
        let userId = localStorage.getItem('user-id');
        var temp = [];
        data.forEach(function (item) {
          if (item.user.id == userId) {
            temp.push(item);
          }
        }); 
        this.issuesList = temp;
      }
    );
  }

}
