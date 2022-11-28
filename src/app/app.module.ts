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

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"list",
    component:ViewbooksComponent
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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
