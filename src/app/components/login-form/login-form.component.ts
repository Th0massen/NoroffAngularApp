import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginResultModel } from 'src/app/models/login-result.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  @Output() onLoginUser: EventEmitter<LoginResultModel>;
  form: FormGroup;

  constructor(private auth: AuthService){
    this.onLoginUser = new EventEmitter<LoginResultModel>();

  }

  ngOnInit(){
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    }) 
  }

  onLoginSubmit(formValues: any){
    if( this.auth.login(formValues.username, formValues.password) ){
      this.auth.startSession();
      this.onLoginUser.emit({
        success: true
      })
    } else{
      this.onLoginUser.emit({
        success: false,
        message: 'Invalid username or password'
      })
    }
  }
}
