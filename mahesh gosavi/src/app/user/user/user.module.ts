import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';
import { GetUserByIdComponent } from '../get-user-by-id/get-user-by-id.component';
import { GetAllUserComponent } from '../get-all-user/get-all-user.component';



@NgModule({
  declarations: [
    GetAllUserComponent,
    GetUserByIdComponent,
    AddNewUserComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GetAllUserComponent]
})
export class UserModule { }
