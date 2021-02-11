import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { AuthapiService } from '../authapi.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private ati:AuthapiService) { }

  

  ngOnInit(): void {
  }
  user:Auth ={ id: null , email:'', password:''} ;

  signup(){
    this.ati.signup(this.user).subscribe(
      res =>{
        this.router.navigate(["login"]);
      
    },
    err => {console.log(err)}
    )
  }

}
