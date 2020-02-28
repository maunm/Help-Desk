import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientApiService } from 'src/app/services/client-api.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {

  constructor(private clientApiService: ClientApiService) { }

  msg: string = null;

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const registerObserver = {
      next: x => this.successAction(f),
      error: err => f.controls['descriptionIssue'].setErrors({'incorrect': true}),
    };
    this.clientApiService.createIssueClient(f.value).subscribe(registerObserver);
  }

  successAction(f){
    this.msg = 'Issue created successful!';

    // Clear the form fields.
    f.controls['descriptionIssue'].setValue('');
    f.controls['phoneIssue'].setValue('');
    f.controls['emailIssue'].setValue('');
    f.controls['addressIssue'].setValue('');
  }

}
