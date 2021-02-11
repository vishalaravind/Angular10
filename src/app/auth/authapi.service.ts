import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  constructor( private http:HttpClient) { }

  private dburl = "http://localhost:3000/user";

  public signup(user:Auth):Observable<Auth>{
    return this.http.post<Auth>(this.dburl,user);
  }
   
  public signin(user:Auth):Observable<any>{
    return this.http.get<any>(this.dburl+"?email="+user.email+"&password="+user.password);
  }
}  