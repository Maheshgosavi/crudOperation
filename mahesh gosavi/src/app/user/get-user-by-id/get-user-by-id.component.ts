import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-get-user-by-id',
  templateUrl: './get-user-by-id.component.html',
  styleUrls: ['./get-user-by-id.component.css']
})

export class GetUserByIdComponent implements OnInit {
userId:any=[]
  constructor(private user:UserserviceService) {
  
   }

  ngOnInit(): void {

   
  }

}
