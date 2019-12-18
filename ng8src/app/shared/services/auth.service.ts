import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = null;

  constructor(
    private httpClient: HttpClient
  ) {
    this.checklogin()
      .subscribe((value: {success: boolean, user: any}) => {
        // if(value.success){
        //   this.user = value.user;
        // }else{
        //   this.user = null;
        // }
        value.success ? this.user = value.user : this.user = null;
      });
  }
  login(user): Observable<{success: boolean, user: any}>  {
    // spring security only supports FormURLEncoded data(form data)
    // username =admin&password=adminpass
    const HttpParam = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    return this.httpClient.post<{success: boolean, user: any}>
    ('${environment.API_URL}/login', user, {withCredentials: true}); // return observable
  }
  logout() {
    return this.httpClient.get('$(environment.API_URL)/logout', {withCredentials: true});
  }
  checklogin() {
    return this.httpClient.get('$(environment.API_URL)/checklogin', {withCredentials: true});
  }
}

