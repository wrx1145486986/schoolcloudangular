import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  listOfData:string[]=[];

  constructor(private client:HttpClient) { }

  ngOnInit() {

    this.getAllUserDate();

  }

  /**
   * 获取用户数据
   */
  public getAllUserDate(){

    var api :string = "http://localhost:8080/user/findall";
    const opetions = {
      headers :new HttpHeaders({
        "Content-Type":"application/json"
      }),
      withCredentials:true
    };
    this.client.post(api,opetions).subscribe((response:any)=>{
      console.log(response);

      this.listOfData=response;

    });
  }

}
