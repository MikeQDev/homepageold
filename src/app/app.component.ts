import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homepage';
  sortBySite = true;

  linkCards = [
    {
      title: 'Reddit',
      subtitle: 'Reddit',
      avatarUrl: 'assets/reddit-icon.svg',
      links: [
        { text: "entr", url: "https://www.reddit.com/r/Entrepreneur/", site: "Reddit", category: "Business" },
        { text: "fi", url: "https://www.reddit.com/r/financialindependence/", site: "Reddit", category: "Finance" }
      ]
    },
    {
      title: 'YouTube',
      subtitle: 'Easy watching',
      avatarUrl: 'assets/youtube-icon.svg',
      links: [
        { text: "growth", url: "https://www.youtube.com/user/phuckmediocrity/videos", site: "YouTube", category: "Growth" },
        { text: "money", url: "https://www.youtube.com/channel/UCYT-aXiAB-s9xf6cFcXCnNg/videos", site: "YouTube", category: "Finance" }
      ]
    },
    {
      title: 'Misc.',
      subtitle: 'Imageboards',
      avatarUrl: 'assets/clover-icon.svg',
      links: [
        { text: "biz", url: "https://boards.4channel.org/biz/catalog", site: "Misc.", category: "Business" },
        { text: "lit", url: "https://boards.4channel.org/lit/catalog", site: "Misc.", category: "Time waster" },
        { text: "pol", url: "https://boards.4channel.org/pol/catalog", site: "Misc.", category: "Time waster" },
        { text: "g", url: "https://boards.4channel.org/g/catalog", site: "Misc.", category: "Time waster" },
        { text: "b", url: "https://boards.4channel.org/b/catalog", site: "Misc.", category: "Time waster" }
      ]
    }
  ];

  toggleSortBySite(toggled) {
    this.sortBySite = toggled;
    // this.linkCards = [];
  }

  ngOnInit(): void {
    this.toggleSortBySite(this.sortBySite);
  }
}
