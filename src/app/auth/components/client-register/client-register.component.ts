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
      next: x => this.successAction(f),
      error: err => f.controls['inputEmailRegister'].setErrors({'incorrect': true}),
    };
    this.clientApiService.registerClient(f.value).subscribe(registerObserver);
  }

  successAction(f){
    this.msg = 'Registration successful!';
    f.controls['inputNameRegister'].setValue('');
    f.controls['inputFirstSurnameRegister'].setValue('');
    f.controls['inputSecondSurnameRegister'].setValue('');
    f.controls['inputEmailRegister'].setValue('');
    f.controls['inputPasswordRegister'].setValue('');
    f.controls['inputAddressRegister'].setValue('');
    f.controls['inputPhoneRegister'].setValue('');
    f.controls['inputPhone2Register'].setValue('');
  }

}
