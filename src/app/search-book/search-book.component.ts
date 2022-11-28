import { Component } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

  bookName = ""

  search = () => {
    let data:any = {
      "bookName":this.bookName
    }
    console.log(data)
  }
}
