import { HttpClient } from '@angular/common/http';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employeedetails } from './employeedetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient  ) { }

  employee: Employeedetails = { id:null  ,name:"", department:"",basic:null, bonus:null, detention:null };

  private dburl ="http://localhost:3000/employee";

  public get_all_employee():Observable<Employeedetails[]>{
    return this.http.get<Employeedetails[]>(this.dburl);
  }
  
  public create_employee(employee:Employeedetails):Observable<Employeedetails>{
    return this.http.post<Employeedetails>(this.dburl,employee);
  }
   public update_employee(employee:Employeedetails):Observable<Employeedetails>{
     return this.http.patch<Employeedetails>(this.dburl+"/"+ employee.id,employee);
   }
   public get_employee_id(id:any):Observable<Employeedetails>{
     return this.http.get<Employeedetails>(this.dburl+"/"+id);
   }

   public delete_employee(id:any):Observable<Employeedetails>{
     return this.http.delete<Employeedetails>(this.dburl+"/"+id);
   }
}
