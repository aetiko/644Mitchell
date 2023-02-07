import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SimpleAngularApp';
  startTime: string;

  @ViewChild('page2', {static: true})
  page2Component: Page2Component;

  @ViewChild('footer', {static: true})
  footerComponent: FooterComponent;

  ngOnInit() {
    this.startTime = new Date().toString();
  }

  updateLastAccess() {
    console.log('Previous last accessed value was' + this.footerComponent.lastAccessed)
    this.footerComponent.lastAccessed = new Date().toString();
  }

  incrementHitCounter() {
    this.page2Component.incrementHitCounter();
  }
}
