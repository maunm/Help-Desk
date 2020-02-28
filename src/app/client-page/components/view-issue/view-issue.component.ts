import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientApiService } from 'src/app/services/client-api.service';
import { IssueObject } from 'src/app/classes/issueObject';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.scss']
})
export class ViewIssueComponent implements OnInit {

  date: string = null;
  description: string = null;
  phone: string = null;
  status: string = null;
  reportNumber: string = null;
  issueId = parseInt(this.route.snapshot.paramMap.get('id'));
  userid = localStorage.getItem('user-id');

  commentList: IssueObject [];

  constructor(public clientApiService: ClientApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientApiService.getIssue(this.issueId).subscribe(
      data => {
        this.date = data.registedtimestamp;
        this.description = data.description;
        this.phone = data.contactphone;
        this.status = data.status;
        this.reportNumber = data.reportNumber;
      }
    );

    this.loadIssueComments();
  }

  msg: string = null;

  onSubmit(f: NgForm) {
    const registerObserver = {
      next: x => this.successAction(f),
      error: err => f.controls['commentIssue'].setErrors({'incorrect': true}),
    };
    this.clientApiService.createCommentClient(f.value, this.issueId).subscribe(registerObserver);
  }

  successAction(f) {
    f.controls['commentIssue'].setValue('')
    this.msg = 'Comment added successful!';
    this.loadIssueComments();
  }

  loadIssueComments() {
    // Save the context.
    var _this = this;
    // Load all the issues comments.
    this.clientApiService.getComments().subscribe(
      data => {
        // Filter the comments to send only the right ones for the current issue.
        var temp = [];
        data.forEach(function (item) {
          if (item.issue.id == _this.issueId) {
            temp.push(item);
          }
        }); 
        this.commentList = temp;
      }
    );
  }

}
