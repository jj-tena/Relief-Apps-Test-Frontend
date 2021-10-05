import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Bookmark } from './bookmark.model';

const BASE_URL = '/api/bookmarks/'

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private httpClient: HttpClient) { }

  getBookmarks():Observable<Bookmark[]>{
    return this.httpClient.get(BASE_URL).pipe() as Observable<Bookmark[]>;
  }

  addBookmark(bookmark: Bookmark){
    this.httpClient.post(BASE_URL, bookmark).subscribe(
      response => console.log(response),
      error => console.error(error)
      );
  }
}
