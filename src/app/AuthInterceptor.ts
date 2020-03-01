import { AuthServiceService } from '../app/service/auth-service.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthServiceService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  	// 获取本地存储的token值，
    const authToken = this.authService.getToken();
    // 若token存在，则对请求添加请求头
    // 并格式化处理url地址，简化service中接口地址的编辑
    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken),
        url: req.url
      });
      return next
      // 返回处理后的请求
      .handle(authReq) ;
    }
    // 若token不存在，则不对请求进行处理
    return next.handle(req);
  }
}