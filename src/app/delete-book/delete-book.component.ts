import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  bookId = ""
  delete = () => {
    let data:any = {
      "bookId":this.bookId
    }
    console.log(data)
  }
}
