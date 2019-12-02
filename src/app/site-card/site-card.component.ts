import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css']
})
export class SiteCardComponent {

  public horizontal = true;

  @Input()
  public card = {
    avatarUrl: "https://www.infragistics.com/angular-demos/assets/images/card/avatars/mellow_d.jpg",
    links: [
      { text: "google", url: "https://google.com/" },
      { text: "reddit", url: "https://reddit.com/" },
      { text: "google", url: "https://google.com/" },
      { text: "reddit", url: "https://reddit.com/" },
      { text: "google", url: "https://google.com/" },
      { text: "reddit", url: "https://reddit.com/" }
    ],
    description: 'some description',
    imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/here_media.jpg",
    subtitle: "Subtitle",
    title: "Title"
  };

  newTab(e) {
    window.open(e.url);
  }
}
