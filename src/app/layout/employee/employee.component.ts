import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Employeedetails } from 'src/app/employeedetails';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   
  employee: Employeedetails [] = [];
  constructor(private ap :ApiService,private router:Router) { }

  createdata(){
    this.router.navigate(["create/edit"]);
  }

  ngOnInit(): void {
    this.commonMethod();
  }
  
  commonMethod():void{
    this.ap.get_all_employee().subscribe(
      res => { this.employee = res},
      err => { console.log(err)}
    )

  }

  edit(id:any){
    this.router.navigate(["create/edit/"+id]);
  }
  delete(id:any){
    this.ap.delete_employee(id).subscribe(
      res =>{
        this.commonMethod();
      },
      err =>{

      }

    );
  }
}
