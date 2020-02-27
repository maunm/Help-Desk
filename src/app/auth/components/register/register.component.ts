import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupportApiService } from 'src/app/services/support-api.service';
import { ServiceObject } from 'src/app/classes/serviceObject';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public supportApiService: SupportApiService) { }

  msg: string = null;
  servicesList: ServiceObject [];

  ngOnInit(): void {
    this.supportApiService.getServices().subscribe(
      data => {
        this.servicesList = data;
      }
    );
  }

  onSubmit(f: NgForm) {
    const registerObserver = {
      next: x => this.msg = 'Registration successful!',
      error: err => f.controls['inputEmailRegister'].setErrors({'incorrect': true}),
    };
    this.supportApiService.registerSupporter(f.value).subscribe(registerObserver);
  }
}
