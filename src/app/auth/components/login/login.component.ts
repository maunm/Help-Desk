import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const loginObserver = {
      next: x => console.log('User login'),
      error: err => f.controls['inputEmailLogin'].setErrors({'incorrect': true}),
    };
    this.authService.loginSupporter(f.value).subscribe(loginObserver);
  }

}
