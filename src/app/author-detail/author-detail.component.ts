import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAuthor } from 'src/constants';
@Component({
  selector: 'author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent {
  @Input() author!: IAuthor;
  @Output() select = new EventEmitter<IAuthor>();
  @Output() deleteAuthor = new EventEmitter<number>();
}
