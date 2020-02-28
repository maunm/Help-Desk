import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupportApiService } from 'src/app/services/support-api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private supportApiService: SupportApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: x => this.router.navigate(['supporter/issues-list']).then(() => {
        window.location.reload();
      }),
      error: err => f.controls['inputEmailLogin'].setErrors({'incorrect': true}),
    };
    this.supportApiService.loginSupporter(f.value).subscribe(loginObserver);
  }

}
