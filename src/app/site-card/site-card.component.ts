import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css']
})
export class SiteCardComponent {

  public horizontal = true;

  public card = {
    avatarUrl: "https://www.infragistics.com/angular-demos/assets/images/card/avatars/mellow_d.jpg",
    buttons: ["play album"],
    content: `Far far away, behind the word mountains,
      far from the countries Vokalia and Consonantia,
      there live the blind texts.`,
    imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/here_media.jpg",
    subtitle: "by Mellow D",
    title: "HERE"
  };
}
