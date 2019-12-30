import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  submit(){
    alert("mooves admin page");
    this.router.navigateByUrl('admins-page');
  }

}
