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

    if (this.userName=="admin" && this.password == "12345") {
      alert("Login Successfull")
    } else {
      alert("Invalid Credentials!!")
    }
  }
}
