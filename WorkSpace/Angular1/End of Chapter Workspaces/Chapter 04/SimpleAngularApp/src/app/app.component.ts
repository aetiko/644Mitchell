import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentPage = 1;

  ngOnInit(): void {
  }

  onPageChange(page:number ) {
    this.currentPage = page;
  }
}
