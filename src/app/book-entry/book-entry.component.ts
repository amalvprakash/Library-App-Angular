import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  bookName = ""
  bookId = ""
  bookAuthor = ""
  bookPrice = ""
  dateOfEntry = ""

  bookEntry = () => {
    let data:any = {
      "bookName":this.bookName,
      "bookId":this.bookId,
      "bookAuthor":this.bookAuthor,
      "bookPrice":this.bookPrice,
      "dateOfEntry":this.dateOfEntry
    }
    console.log(data)
  }
}
