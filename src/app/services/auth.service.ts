import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = "http://gabrieln-001-site1.ftempurl.com/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };

  constructor(private http: HttpClient) { }

  loginSupporter(model: any) {
    let email = model.inputEmailLogin;
    let pass = model.inputPasswordLogin;
    return this.http.get(this.baseURL + '/Supporter?email=' + email + '&pass=' + pass).pipe(
      map((response: any) => {
        if (response == 'User not found') {
          throw new Error('Invalid user data.');
        } else {
          localStorage.setItem('user-id', response.Id);
          localStorage.setItem('role', 'supporter');
        }
      }),
      catchError(this.errorHandl)
    );
  }

  registerSupporter(model: any) {
    var data = 'Id=0';
    data += '&Name=' + model.inputNameRegister;
    data += '&password=' + model.inputPasswordRegister;
    data += '&FirstSurname=' + model.inputFirstSurnameRegister;
    data += '&SecondSurname=' + model.inputSecondSurnameRegister;
    data += '&Email=' + model.inputEmailRegister;

    return this.http.post(this.baseURL + '/Supporter', data, this.httpOptions).pipe(
      map((response: any) => {
        console.log(response);
      }),
      catchError(this.errorHandl)
    );
  }

  // Error handling.
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
   }
}
