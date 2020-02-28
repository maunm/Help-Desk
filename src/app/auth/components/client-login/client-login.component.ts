import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientApiService } from 'src/app/services/client-api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {

  constructor(private clientApiService: ClientApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: x => this.router.navigate(['issues-list']).then(() => {
        window.location.reload();
      }),
      error: err => f.controls['inputEmailLogin'].setErrors({'incorrect': true}),
    };
    this.clientApiService.loginClient(f.value).subscribe(loginObserver);
  }

}
