import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {
  bookName = ""
  bookAuthor = ""
  issuerName = ""
  contactNumber = ""

  issue = () =>{
    let data:any = {
      "bookName":this.bookName,
      "bookAuthor":this.bookAuthor,
      "issuerName":this.issuerName,
      "contactNumber":this.contactNumber
    }
    console.log(data)
  }

}
