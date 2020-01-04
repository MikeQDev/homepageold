import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'homepage';
  sortBySite = true;
  displayLinkIcons = true;

  linkCards: any[] = [];

  links: any[] = [
    { text: "entr", url: "https://www.reddit.com/r/Entrepreneur/", site: "Reddit", category: "Business" },
    { text: "fi", url: "https://www.reddit.com/r/financialindependence/", site: "Reddit", category: "Finance" },

    { text: "growth", url: "https://www.youtube.com/user/phuckmediocrity/videos", site: "YouTube", category: "Growth" },
    { text: "money", url: "https://www.youtube.com/channel/UCYT-aXiAB-s9xf6cFcXCnNg/videos", site: "YouTube", category: "Finance" },
    { text: "TechLead", url: "https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw/videos", site: "YouTube", category: "Tech" },

    { text: "biz", url: "https://boards.4channel.org/biz/catalog", site: "Misc.", category: "Business" },
    { text: "lit", url: "https://boards.4channel.org/lit/catalog", site: "Misc.", category: "Time waster" },
    { text: "pol", url: "https://boards.4channel.org/pol/catalog", site: "Misc.", category: "Time waster" },
    { text: "g", url: "https://boards.4channel.org/g/catalog", site: "Misc.", category: "Time waster" },
    { text: "b", url: "https://boards.4channel.org/b/catalog", site: "Misc.", category: "Time waster" },
    { text: "out", url: "https://boards.4channel.org/out/catalog", site: "Misc.", category: "Time waster" }
  ];

  bySite: any[] = [
    {
      title: 'Reddit',
      subtitle: 'Reddit',
      avatarUrl: 'assets/reddit-icon.svg',
      links: []
    },
    {
      title: 'YouTube',
      subtitle: 'Easy watching',
      avatarUrl: 'assets/youtube-icon.svg',
      links: []
    },
    {
      title: 'Misc.',
      subtitle: 'Imageboards',
      avatarUrl: 'assets/clover-icon.svg',
      links: []
    }
  ];

  byCategory: any[] = [
    {
      title: 'Business',
      subtitle: 'Business',
      avatarUrl: 'assets/briefcase-icon.svg',
      links: []
    },
    {
      title: 'Finance',
      subtitle: 'Finance',
      avatarUrl: 'assets/moneybag-icon.svg',
      links: []
    },
    {
      title: 'Growth',
      subtitle: 'Growth',
      avatarUrl: 'assets/muscle-icon.svg',
      links: []
    },
    {
      title: 'Time waster',
      subtitle: 'Time waster',
      avatarUrl: 'assets/clockfire-icon.svg',
      links: []
    },
    {
      title: 'Tech',
      subtitle: 'Technology',
      avatarUrl: 'assets/workstation-icon.svg',
      links: []
    }
  ];

  toggleSortBySite(toggled) {
    this.sortBySite = toggled;
    if (this.sortBySite) {
      this.linkCards = this.bySite;
    } else {
      this.linkCards = this.byCategory;
    }
    this.toggleLinkIcons(this.displayLinkIcons);
  }

  toggleLinkIcons(toggled) {
    this.displayLinkIcons = toggled;
    this.linkCards.forEach(l => {
      l.displayLinkIcon = this.displayLinkIcons;
    });
  }

  ngOnInit(): void {
    this.links.forEach(l => {
      l.linkSiteAvatarUrl = this.bySite.filter(s => s.title === l.site)[0].avatarUrl;
      l.linkCategoryAvatarUrl = this.byCategory.filter(c => c.title === l.category)[0].avatarUrl;
    });
    this.byCategory.forEach(c => {
      c.displaySiteIcon = true;
      c.links = this.links.filter(l => c.title === l.category);
    });
    this.bySite.forEach(s => {
      s.displayCategoryIcon = true;
      s.links = this.links.filter(l => s.title === l.site);
    });
    this.toggleSortBySite(this.sortBySite);
  }
}
