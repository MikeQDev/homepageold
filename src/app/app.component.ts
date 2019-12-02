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
        { text: "entrepreneur", url: "https://www.reddit.com/r/Entrepreneur/" },
        { text: "fi", url: "https://www.reddit.com/r/financialindependence/" }
      ]
    },
    {
      title: 'YouTube',
      subtitle: 'Easy watching',
      avatarUrl: 'assets/youtube-icon.svg',
      links: [
        { text: "growth", url: "https://www.youtube.com/user/phuckmediocrity/videos" },
        { text: "money", url: "https://www.youtube.com/channel/UCYT-aXiAB-s9xf6cFcXCnNg/videos" }
      ]
    },
    {
      title: 'Misc.',
      subtitle: 'Imageboards',
      avatarUrl: 'assets/clover-icon.svg',
      links: [
        { text: "biz", url: "https://boards.4channel.org/biz/catalog" },
        { text: "lit", url: "https://boards.4channel.org/lit/catalog" },
        { text: "pol", url: "https://boards.4channel.org/pol/catalog" },
        { text: "g", url: "https://boards.4channel.org/g/catalog" },
        { text: "b", url: "https://boards.4channel.org/b/catalog" }
      ]
    }
  ];

}
