import { Bookmark } from './bookmarks/bookmark.model';
import { HistoryService } from './history/history.service';
import { Component } from '@angular/core';
import { BookmarksService } from './bookmarks/bookmarks.service';
import { History } from './history/history.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  embedLinkForVideoView: string = "";

  titleForVideoView: string = "";

  historyList: History[] = [];

  bookmarkList: Bookmark[] = [];

  title = 'Frontend';

  constructor(private bookmarksService:BookmarksService, private historyService:HistoryService){
    this.historyService.getHistory().subscribe(
      history => this.historyList = history,
      error => console.log(error)
    );
    this.bookmarksService.getBookmarks().subscribe(
      bookmarks => this.bookmarkList = bookmarks,
      error => console.log(error)
    );
  }

  async inspectJSON(myJson:any){
    let iframe = myJson.html;
    let title = myJson.title;
    let embedLink = iframe.slice(38,94);
    this.embedLinkForVideoView = embedLink;
    this.titleForVideoView = title;
    let newHistory: History = {title: title, embedLink: embedLink};
    await this.historyService.addHistory(newHistory);
    this.historyList.push(newHistory);
  }

  changeVideoFromHistory(history:History){
    this.embedLinkForVideoView = history.embedLink;
    this.titleForVideoView = history.title;
  }

  addBookmark(title:string){
    let newBookmark: Bookmark = {title: title};
    this.bookmarksService.addBookmark(newBookmark);
    this.bookmarkList.push(newBookmark);
  }

}
