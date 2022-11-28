import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
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
