import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllUserComponent } from './user/get-all-user/get-all-user.component';
import { GetUserByIdComponent } from './user/get-user-by-id/get-user-by-id.component';
import { AddNewUserComponent } from './user/add-new-user/add-new-user.component';
import { UpdateComponent } from './user/update/update.component';
import { DeleteComponent } from './user/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
