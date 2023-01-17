import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SimpleAngularApp';

  @ViewChild('footer')
  footerComponent: FooterComponent;

  startTime: string;

  updateLastAccessed(): void {
    console.log('the previous last accessed value was ' + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

}
