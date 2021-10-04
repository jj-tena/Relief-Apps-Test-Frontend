import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  emitJSON = new EventEmitter<Object>();

  async search(link: String){
    const response = await fetch('https://www.youtube.com/oembed?url=' + link + '&format=json');
    const myJson = await response.json();
    this.emitJSON.emit(myJson);
  }

}
