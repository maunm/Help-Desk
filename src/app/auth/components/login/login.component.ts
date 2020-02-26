import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: x => this.router.navigate(['supporter/issues-list']).then(() => {
        window.location.reload();
      }),
      error: err => f.controls['inputEmailLogin'].setErrors({'incorrect': true}),
    };
    this.authService.loginSupporter(f.value).subscribe(loginObserver);
  }

}
