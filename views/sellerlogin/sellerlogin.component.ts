import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/model/register';
import { RegisterService } from 'src/app/service/register.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {
  
//   isNewUser = true;
//   email = '';
//   password = '';
//   errorMessage = '';
//   error: { name: string, message: string } = { name: '', message: '' };
//   constructor() { }

 
 
//     onLoginEmail():void{
//       if (this.validateForm(this.email, this.password)) {
       
//         alert("Login Sucessful");
//       }
//     }
  
//     validateForm(email: string, password: string): boolean {
//       if (email.length === 0) {
//         this.errorMessage = 'Please enter Email!'
//         return false
//       }
  
//       if (password.length === 0) {
//         this.errorMessage = 'Please enter Password!'
//         return false
//       }
  
//       if (password.length < 8) {
//         this.errorMessage = 'Password should be at least 8 characters!'
//         return false
//       }
  
//       this.errorMessage = ''
//       return true
//     }
  
// }
user: Register;
msg: string;
isNew: boolean;
constructor(private loginService: RegisterService,
  private actRoute: ActivatedRoute,
  private router: Router) { }

ngOnInit() {
  let userId = this.actRoute.snapshot.params.id;
  if (userId) {
    this.isNew = false;
    this.loginService.getById(userId).subscribe(
      (data) => {
        this.user = data;
      }
    );

  } else {
    this.isNew = true;
    this.user = {
      userId: 0,
      userName: '',
      password: '',
      role: ''
    };
  }
}
signIn() {
  if (localStorage) {
    var name = (<HTMLInputElement>document.getElementById("userName")).value;
    localStorage.setItem("userId", name);
    var id = localStorage.getItem("userId");
    this.router.navigateByUrl("/selleraccess");
  }
}
}
