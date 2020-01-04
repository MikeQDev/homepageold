import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css']
})
export class SiteCardComponent {

  public horizontal = true;

  @Input()
  public card: any = {};

  newTab(e) {
    window.open(e.url);
  }
}
