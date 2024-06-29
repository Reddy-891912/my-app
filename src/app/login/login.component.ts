import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _LoginService: LoginService, private _router: Router) { }

  public loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()
    })

  login() {
    this._LoginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        // storage toke
        localStorage.setItem("my-app-token", data.token);
        // go to dashboard
        this._router.navigateByUrl("/dashboard");
        alert("Login Successfully")
      },
      (err: any) => {
        alert("Login Failed");
      }
    )
  }

}
