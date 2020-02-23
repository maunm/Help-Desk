import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = "https://help-desk-test.free.beeceptor.com/api";

  constructor(private http: HttpClient) { }

  // Http Headers.
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(model: any) {
    return this.http.post(this.baseURL + '/login', model, this.httpOptions).pipe(
      map((response: any) => {
        console.log(response);
        localStorage.setItem('session-token', 'test-token');
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
