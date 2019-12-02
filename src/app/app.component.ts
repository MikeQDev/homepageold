import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homepage';

  linkCards = [
    {
      title: 'Reddit',
      subtitle: 'catA sub',
      avatarUrl: 'assets/reddit-icon.svg',
      links: [
        { text: "google", url: "https://google.com/" },
        { text: "reddit", url: "https://reddit.com/" }
      ]
    },
    {
      title: 'catB',
      subtitle: 'catB sub',
      avatarUrl: 'assets/youtube-icon.svg',
      links: [
        { text: "google", url: "https://google.com/" },
        { text: "reddit", url: "https://reddit.com/" }
      ]
    },
    {
      title: 'catB',
      subtitle: 'catB sub',
      avatarUrl: 'assets/clover-icon.svg',
      links: [
        { text: "google", url: "https://google.com/" },
        { text: "reddit", url: "https://reddit.com/" }
      ]
    }
  ];

}
