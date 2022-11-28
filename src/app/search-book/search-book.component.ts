import { Component } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  bookId = ""

  search = () => {
    let data:any = {
      "bookId":this.bookId
    }
    console.log(data)
  }
}
