import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private URL = 'http://localhost:3000/api/user'

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any){
    return this.http.post<any>(this.URL + '/signup', user)
  }


  logIn(user: any){
    return this.http.post<any>(this.URL + '/login', user)
  }

  loggedIn(): Boolean{
    return !!localStorage.getItem('token')
  }
  
  getToken(){
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
