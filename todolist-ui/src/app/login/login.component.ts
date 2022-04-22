import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  constructor(public loginService : LoginService,
    private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(){
    // console.log("login");
    this.loginService.login(this.username,this.password).subscribe((i:any)=>{
      this.loginService.token = i.token;
      console.log(this.loginService.token);
      this.router.navigateByUrl("/list");
    },err=>{
      console.log(err);
      this._snackBar.open("Login Unsuccessful please try again with correct username or password");
    })
  }

}
