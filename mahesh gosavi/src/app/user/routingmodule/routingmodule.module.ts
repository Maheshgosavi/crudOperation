import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';
import { GetAllUserComponent } from '../get-all-user/get-all-user.component';
import { GetUserByIdComponent } from '../get-user-by-id/get-user-by-id.component';
import { DeleteComponent } from '../delete/delete.component';


const routes: Routes = [
  {path:"get-all-user",component:GetAllUserComponent},
  {path:"get-user-by-id",component:GetUserByIdComponent},
  {path:"add-new-user",component:AddNewUserComponent},
  {path:"delete",component:DeleteComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingmoduleModule { }
