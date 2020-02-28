import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {

  baseURL = "https://api-client-helpdesk.herokuapp.com/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }

  loginClient(model: any) {
    let email = model.inputEmailLogin;
    let pass = model.inputPasswordLogin;
    return this.http.get(this.baseURL + '/users/' + email + '/' + pass).pipe(
      map((response: any) => {
        if (response == 'User not found') {
          throw new Error('Invalid user data.');
        } else {
          localStorage.setItem('user-id', response.id);
          localStorage.setItem('role', 'client');
        }
      }),
      catchError(this.errorHandl)
    );
  }

  registerClient(model: any) {
    var data = {
      "address": model.inputAddressRegister,
      "email": model.inputEmailRegister,
      "firstsurname": model.inputFirstSurnameRegister,
      "name": model.inputNameRegister,
      "password": model.inputPasswordRegister,
      "phone": model.inputPhoneRegister,
      "secondcontact": model.inputPhone2Register,
      "secondsurname": model.inputSecondSurnameRegister
    };

    return this.http.post(this.baseURL + 'users/', data, this.httpOptions).pipe(
      map((response: any) => {
        console.log(response);
      }),
      catchError(this.errorHandl)
    );
  }

  createIssueClient(model: any) {
    var dateTime = this.getCurrentTime();

    let data = {
      "address": model.addressIssue,
      "contactemail": model.emailIssue,
      "contactphone": model.phoneIssue,
      "description": model.descriptionIssue,
      "registedtimestamp": dateTime,
      "reportNumber": Math.floor((Math.random() * 1000000) + 1),
      "status": "Pending",
      "userid": localStorage.getItem('user-id')
    };
    
    return this.http.post(this.baseURL + 'issues/', data, this.httpOptions).pipe(
      map((response: any) => {
        console.log(response);
      }),
      catchError(this.errorHandl)
    );
  }

  createCommentClient(model: any, issueId) {
    var dateTime = this.getCurrentTime();
    let data = {
      "description": model.commentIssue,
      "issueid": issueId,
      "timestamp": dateTime,
    };
    
    return this.http.post(this.baseURL + 'comments/', data, this.httpOptions).pipe(
      map((response: any) => {
        console.log(response);
      }),
      catchError(this.errorHandl)
    );
  }

  getComments(): Observable<any> {
    return this.http.get(this.baseURL + 'comments/');
  }

  getIssues(): Observable<any> {
    return this.http.get(this.baseURL + 'issues/');
  }

  getIssue(id): Observable<any> {
    return this.http.get(this.baseURL + 'issues/' + id);
  }

  getCurrentTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
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
