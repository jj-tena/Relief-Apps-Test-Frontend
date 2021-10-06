import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { History } from './history.model';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input()
  history: History[] = [];

  @Output()
  emitEmbedLink = new EventEmitter<History>();

  constructor() { }

  ngOnInit(): void {
  }

  firstTimeClicked: boolean = true;

  changeVideo(historyToChange: History){
    if (this.firstTimeClicked){
      this.emitEmbedLink.emit(historyToChange);
      this.firstTimeClicked = false;
    }
  }

}
