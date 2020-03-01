import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  /**
   * 保存token到硬盘
   * @param token 
   */
  public saveToken(token:string) {

    window.localStorage.setItem("user_token",token);

  }

  /**
   * 获取token
   */
  public getToken():any {

   return window.localStorage.getItem("user_token");

  }

  /**
   * 根据状态码路由
   */
  // public route(responce:any){

  //   switch (responce.code) {
  //     // 成功获取相应 跳转页面
  //     case 200:
        
  //       break;
    
  //     default:
  //       break;
  //   }

  // }


}
