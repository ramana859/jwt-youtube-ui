import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_PATH = "http://localhost:9090"

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  )

  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) { }

  public login(loginData) {
    return this.httpclient.post(this.API_PATH + "/authenticate", loginData, { headers: this.requestHeader })
  }

  public forUser(){
    return this.httpclient.get(this.API_PATH+'/forUser', {responseType:"text"});
  }

  public forAdmin(){
    return this.httpclient.get(this.API_PATH+'/forAdmin', {responseType:"text"});
  }

  public roleMatch(allowedRoles):boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    if (userRoles != null && userRoles) {
      // console.log(userRoles);
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }return isMatch;
  }
}
