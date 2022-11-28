import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { HomeComponent } from './home/home.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"add",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:ViewbooksComponent
  },
  {
    path:"search",
    component:SearchBookComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  },
  {
    path:"issue",
    component:IssueBookComponent
  },
  {
    path:"home",
    component:HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    SearchBookComponent,
    DeleteBookComponent,
    IssueBookComponent,
    BookEntryComponent,
    ViewbooksComponent,
    NavbarComponent,
    UserLoginComponent,
    UserNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
