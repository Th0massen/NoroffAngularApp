import { Injectable } from '@angular/core';
import { MOCK_ACCOUNT } from '../../mocks/account.mock'
import { LoginResultModel } from '../../models/login-result.model'
import { AccountModel } from 'src/app/models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.account = MOCK_ACCOUNT;
  }

  account = {} as AccountModel;

  getAccount(){
    return this.account;
  }

  login( username:string, password:string ):boolean{
    return this.account.username == username && this.account.password == password;
  }

  startSession(){
    return window.localStorage.setItem('auth-token', 'Sl337jJK#1FhF32$@A')
  }

  isAuthorized(): boolean | string {
    return window.localStorage.getItem('auth-token')
  }
}
