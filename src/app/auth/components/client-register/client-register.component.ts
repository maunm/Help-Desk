import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientApiService } from 'src/app/services/client-api.service';
import { SupportApiService } from 'src/app/services/support-api.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  constructor(private clientApiService: ClientApiService, public supportApiService: SupportApiService) { }

  msg: string = null;

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const registerObserver = {
      next: x => this.msg = 'Registration successful!',
      error: err => f.controls['inputEmailRegister'].setErrors({'incorrect': true}),
    };
    this.clientApiService.registerClient(f.value).subscribe(registerObserver);
  }

}
