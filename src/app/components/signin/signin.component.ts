import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private client:HttpClient,
              private route:Router) { }

  validateForm: FormGroup;

  private token:String ;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.validateForm.value.userName != null && this.validateForm.value.password != null){

      var user = {
        email:this.validateForm.value.userName,
        password:this.validateForm.value.password,
        remember:this.validateForm.value.remember
      }

      var api:string = "http://localhost:8080/user/signin"

      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type":  "application/json"
        }),
        withCredentials:true
      };
      this.client.post(api,user,httpOptions).subscribe((responce:any)=>{
        console.log(responce);
        if(responce.code == 200 ){
          if(responce.token == null && responce.message == "OK"){
            // 相应码为 200  并且存在token情况 进行路由操作
            console.log("跳转！");
            this.route.navigate(['home']);
          }else{
            window.localStorage.setItem("user_token",responce.token);
            window.localStorage.setItem("user_id",responce.id);
            window.localStorage.setItem("user_email",responce.email);
            this.route.navigate(['home']);
          }
        }
      })


    }
  }

  ngOnInit(): void {
    // 设置表单参数
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
