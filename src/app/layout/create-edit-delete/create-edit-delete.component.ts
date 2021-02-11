import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Employeedetails } from 'src/app/employeedetails';



@Component({
  selector: 'app-create-edit-delete',
  templateUrl: './create-edit-delete.component.html',
  styleUrls: ['./create-edit-delete.component.css']
})
export class CreateEditDeleteComponent implements OnInit {

  constructor(private ap: ApiService, private router:Router,private route:ActivatedRoute) {}

  employee: Employeedetails = { id:null  ,name:"", department:"",basic:null, bonus:null, detention:null };
  operation: any = "create";
  ngOnInit(): void {
    this.route.params.subscribe(
      params =>{
        if(params.id){
          this.operation="edit";
          this.ap.get_employee_id(params.id).subscribe(
            res =>{
              this.employee =res;
            }
          )
        }
      }
    )
  }
   
  
  submit(){
    if( this.operation ==='edit'){
      this.ap.update_employee(this.employee).subscribe(
        res =>{
          this.router.navigate(["/"]);
        },
        err =>{
          console.log(err);
        }
      )

    }else{
      this.ap.create_employee(this.employee).subscribe(
        res =>{
          this.router.navigate(["/"]);
        },
        err =>{
          console.log(err);
        }
      )
    }
  }
}
