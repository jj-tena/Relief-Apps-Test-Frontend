import { Bookmark } from './bookmark.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  @Input()
  bookmarks: Bookmark[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
