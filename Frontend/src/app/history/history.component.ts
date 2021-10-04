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
  emitEmbedLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeVideo(embedLink: string){
    this.emitEmbedLink.emit(embedLink);
  }

}
