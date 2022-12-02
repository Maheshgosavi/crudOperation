import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
getAll="https://devservices.qpathways.com/otc/test/user";
getUserbyId="https://devservices.qpathways.com/otc/test/user/{id}";
addNewUser="https://devservices.qpathways.com/otc/test/user/save";
update="https://devservices.qpathways.com/otc/test/user/update";
delete="https://devservices.qpathways.com/otc/test/user/delete/{id}"

  constructor(private http: HttpClient,) { 

    
  }
  getUser(){
      this.http.get(this.getAll)
  };
  getUserId(){
    this.http.get(this.getUserbyId)
  };
upDateUser(){
  this.http.post(this.update)
}
  

}
