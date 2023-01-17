import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  @Output()
  pageRequested = new EventEmitter<number>();

  onChangePage(page: number): void {
    console.log("page " + page +  "clicked");
    this.pageRequested.emit(page);
  }


}
