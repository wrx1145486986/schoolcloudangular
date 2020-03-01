import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './AuthInterceptor';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UseraddComponent } from './components/useradd/useradd.component';
registerLocaleData(zh);



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    UserlistComponent,
    UseraddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule
  ],
   /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    { 
      provide: NZ_I18N, 
      useValue: zh_CN 
    },
    {
			provide: HTTP_INTERCEPTORS,
	      	useClass: AuthInterceptor,
	      	multi: true
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// ########################################################################################

