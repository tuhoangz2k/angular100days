import { Component } from '@angular/core';
import { IAuthor, authorList } from 'src/constants';
@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  authors = authorList;
  currentAuthor = authorList[0];
  onChangeAuthor(event: IAuthor) {
    this.currentAuthor = event;
  }
  onDeleteAuthor(event: number) {
    this.authors = this.authors.filter((ele) => ele.id !== event);
    if (this.currentAuthor.id === event) {
      this.currentAuthor = authorList[0];
    }
  }
}
