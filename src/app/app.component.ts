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
      title: 'catA',
      subtitle: 'catA sub',
      avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/card/avatars/mellow_d.jpg',
      links: [
        { text: "google", url: "https://google.com/" },
        { text: "reddit", url: "https://reddit.com/" }
      ]
    },
    {
      title: 'catB',
      subtitle: 'catB sub',
      avatarUrl: 'https://www.infragistics.com/angular-demos/assets/images/card/avatars/mellow_d.jpg',
      links: [
        { text: "google", url: "https://google.com/" },
        { text: "reddit", url: "https://reddit.com/" }
      ]
    }
  ];

}
