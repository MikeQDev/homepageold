import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homepage';
  sortBySite = true;

  linkCards = [
    {
      title: 'Reddit',
      subtitle: 'Reddit',
      avatarUrl: 'assets/reddit-icon.svg',
      links: [
        { text: "entr", url: "https://www.reddit.com/r/Entrepreneur/", site: "Reddit" },
        { text: "fi", url: "https://www.reddit.com/r/financialindependence/", site: "Reddit" }
      ]
    },
    {
      title: 'YouTube',
      subtitle: 'Easy watching',
      avatarUrl: 'assets/youtube-icon.svg',
      links: [
        { text: "growth", url: "https://www.youtube.com/user/phuckmediocrity/videos", site: "YouTube" },
        { text: "money", url: "https://www.youtube.com/channel/UCYT-aXiAB-s9xf6cFcXCnNg/videos", site: "YouTube" }
      ]
    },
    {
      title: 'Misc.',
      subtitle: 'Imageboards',
      avatarUrl: 'assets/clover-icon.svg',
      links: [
        { text: "biz", url: "https://boards.4channel.org/biz/catalog", site: "Misc." },
        { text: "lit", url: "https://boards.4channel.org/lit/catalog", site: "Misc." },
        { text: "pol", url: "https://boards.4channel.org/pol/catalog", site: "Misc." },
        { text: "g", url: "https://boards.4channel.org/g/catalog", site: "Misc." },
        { text: "b", url: "https://boards.4channel.org/b/catalog", site: "Misc." }
      ]
    }
  ];

  toggleSortBySite(toggled) {
    console.log(toggled);
  }

}
