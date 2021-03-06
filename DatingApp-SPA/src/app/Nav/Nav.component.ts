import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

    model:any ={};

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next=>{
      console.log('logged in successfuly');
    },
    error=>{
      console.log('failed to login');
    }
    );
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !!token;
  }


  logout(){
    localStorage.removeItem("token");
    console.log("logged out");
  }
}
