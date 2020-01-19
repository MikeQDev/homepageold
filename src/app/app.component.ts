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
      avatarUrl: 'assets/icons/reddit-icon.svg',
      links: []
    },
    {
      title: 'YouTube',
      subtitle: 'Easy watching',
      avatarUrl: 'assets/icons/youtube-icon.svg',
      links: []
    },
    {
      title: 'Misc.',
      subtitle: 'Imageboards',
      avatarUrl: 'assets/icons/clover-icon.svg',
      links: []
    }
  ];

  byCategory: any[] = [
    {
      title: 'Business',
      subtitle: 'Business',
      avatarUrl: 'assets/icons/briefcase-icon.svg',
      links: []
    },
    {
      title: 'Finance',
      subtitle: 'Finance',
      avatarUrl: 'assets/icons/moneybag-icon.svg',
      links: []
    },
    {
      title: 'Growth',
      subtitle: 'Growth',
      avatarUrl: 'assets/icons/muscle-icon.svg',
      links: []
    },
    {
      title: 'Time waster',
      subtitle: 'Time waster',
      avatarUrl: 'assets/icons/clockfire-icon.svg',
      links: []
    },
    {
      title: 'Tech',
      subtitle: 'Technology',
      avatarUrl: 'assets/icons/workstation-icon.svg',
      links: []
    }
  ];

  radioCards: any[] = [];
  //singleRadioCard: any[] = [];

  radioLinks: any[] = [
    { title: '99.1', subtitle: 'PLR', url: "https://16923.live.streamtheworld.com/WPLRFMAAC.aac", image: 'https://express-images.franklymedia.com/5829/sites/14/2017/12/08142713/logo_wplr1.png' },
    { title: '104.1', subtitle: 'WMRQ', url: "https://crystalout.surfernetwork.com:8001/WMRQ_MP3", image: 'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1110/2019/02/26133643/WMRQ%402x.png' },
    { title: '93.7', subtitle: 'HOT', url: "https://17443.live.streamtheworld.com/WZMXFM_SC?sbmid=6a516b9a-2fae-45d1-9ba5-d9957d2c23f0", image: 'https://images.radio.com/wzmxfm/general/WZMX_Header_Large_Logo.png' },
  ]

  setupRadio() {
    this.radioCards = [
      {
        title: 'Radio',
        subtitle: 'Music',
        avatarUrl: 'assets/icons/music.svg',
        cardType: 'radio',
        links: this.radioLinks.map(r => {
          return {
            title: r.title,
            subtitle: r.subtitle,
            avatarUrl: r.image,
            radioStreamUrl: r.url
          }
        })
      }
    ];
  }

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

  setupWebsites() {
    this.links.forEach(l => {
      l.linkSiteAvatarUrl = this.bySite.filter(s => s.title === l.site)[0].avatarUrl;
      l.linkCategoryAvatarUrl = this.byCategory.filter(c => c.title === l.category)[0].avatarUrl;
    });
    this.byCategory.forEach(c => {
      c.displaySiteIcon = true;
      c.links = this.links.filter(l => c.title === l.category);
      c.cardType = 'website';
    });
    this.bySite.forEach(s => {
      s.displayCategoryIcon = true;
      s.links = this.links.filter(l => s.title === l.site);
      s.cardType = 'website';
    });
    this.toggleSortBySite(this.sortBySite);

  }
  ngOnInit(): void {
    this.setupWebsites();
    this.setupRadio();
    console.log(this.linkCards);
    console.log(this.radioCards);
  }
}
