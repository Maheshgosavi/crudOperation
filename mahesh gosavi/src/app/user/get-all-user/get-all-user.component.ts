import { Component, OnInit } from '@angular/core';
import userData from '../db.json';
interface User{
  firstname:string ,
middlename: string,
lastname: string,
gender: string,
birthdate: number,
city: string,
state: string,
country: string,
zip:string
}
@Component({
  selector: 'app-get-all-user',
  templateUrl: './get-all-user.component.html',
  styleUrls: ['./get-all-user.component.css']
})
export class GetAllUserComponent implements OnInit {

  constructor() { 

    
  }
  users:User[]=userData;

  ngOnInit(): void {
  }

}
