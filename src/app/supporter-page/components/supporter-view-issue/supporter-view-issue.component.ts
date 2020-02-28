import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupportApiService } from 'src/app/services/support-api.service';
import { IssueObject } from 'src/app/classes/issueObject';
import { SupporterObject } from 'src/app/classes/supporterObject';
import { SupervisorObject } from 'src/app/classes/supervisorObject';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supporter-view-issue',
  templateUrl: './supporter-view-issue.component.html',
  styleUrls: ['./supporter-view-issue.component.scss']
})
export class SupporterViewIssueComponent implements OnInit {

  date: string = null;
  classification: string = null;
  status: string = null;
  supporter: string = null;
  supporterList: SupporterObject []
  supervisor: string = null;
  supervisorList: SupervisorObject []

  constructor(public supportApiService: SupportApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let issueId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.supportApiService.getSupporters().subscribe(
      data => {
        this.supporterList = data;
      }
    );

    this.supportApiService.getSupervisors().subscribe(
      data => {
        this.supervisorList = data;
      }
    );

    this.supportApiService.getIssue(issueId).subscribe(
      data => {
        this.date = data.RaportTimestamp;
        this.classification = data.Classification;
        this.status = data.Status;

        this.supportApiService.getSupporter(data.SupporterId).subscribe(
          data => {
            this.supporter = data.Id;
          }
        );
        this.supportApiService.getSupervisor(data.SupervisorId).subscribe(
          data => {
            this.supervisor = data.Id;
          }
        );
      }
    );
  }

}
