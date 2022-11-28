import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  userName = ""
  password = ""

  login = () =>{
    let data:any = {
      "username":this.userName,
      "password":this.password
    }
    console.log(data)
  }
}
