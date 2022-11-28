import { Component } from '@angular/core';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {
  bookData:any = [
    {
      "image":"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780684801223/old-man-and-the-sea-9780684801223_hr.jpg",
      "bookName":"Old Man and sea",
      "bookId":2001,
      "bookPrice":150
    }
  ]
}
