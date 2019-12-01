import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAvatarModule, IgxButtonModule, IgxCardModule, IgxRippleModule } from 'igniteui-angular';
import { SiteCardComponent } from './site-card/site-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxCardModule,
    IgxRippleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
