import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Auth } from '../auth';
import { AuthapiService } from '../authapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router ,private ati:AuthapiService) { }

  ngOnInit(): void {
  }
 
  user : Auth ={ id:null, email:'', password:'' };

  signin(){
    this.ati.signin(this.user).subscribe(
      res =>{
        if( res.length === 0 ){
          this.router.navigate(["/logout"]);
        }else{
          localStorage.setItem('email',this.user.email)
          this.router.navigate(["/"]);
        }
      }
    )
  }
}
