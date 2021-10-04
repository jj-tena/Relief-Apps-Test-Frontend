import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../bookmarks/bookmark.model';
import { History } from './history.model';

const BASE_URL = '/api/history/'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) { }

  getHistory():Observable<History[]>{
    return this.httpClient.get(BASE_URL).pipe() as Observable<History[]>;
  }

  addHistory(history: History){
    this.httpClient.post(BASE_URL, history).subscribe(
      response => console.log(response),
      error => console.error(error)
      );
  }

}
