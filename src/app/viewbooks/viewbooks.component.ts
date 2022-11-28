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
      "bookName":"The Old Man And Sea",
      "bookId":2001,
      "bookPrice":150
    },
    {
      "image":"https://m.media-amazon.com/images/I/517PJt-WqTL.jpg",
      "bookName":"Death Comes To All",
      "bookId":2002,
      "bookPrice":300
    },
    {
      "image":"https://qph.cf2.quoracdn.net/main-qimg-ee93768b726bd6472f9c79b5032f514c-lq",
      "bookName":"The Kite Runner",
      "bookId":2003,
      "bookPrice":200
    },
    {
      "image":"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/The-Hobbit-book-cover.jpg",
      "bookName":"THe Hobbit",
      "bookId":2004,
      "bookPrice":500
    },
    {
      "image":"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/A-Tale-of-Two-Cities-Cover.jpg",
      "bookName":"A Tale Of Two Cities",
      "bookId":2005,
      "bookPrice":250
    },
    {
      "image":"https://m.media-amazon.com/images/I/51W-r3VQlAL.jpg",
      "bookName":"It Starts With Us",
      "bookId":2007,
      "bookPrice":350
    },
    {
      "image":"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603981638-9780525521143.jpg?crop=1xw:1xh;center,top&resize=480:*",
      "bookName":"The Glass Hotel",
      "bookId":2008,
      "bookPrice":150
    },
    {
      "image":"https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",
      "bookName":"Atomic Habits",
      "bookId":2009,
      "bookPrice":450
    },
    {
      "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Guide-RK-Narayan.jpg",
      "bookName":"The Guide",
      "bookId":2010,
      "bookPrice":350
    }
    
  ]
}
