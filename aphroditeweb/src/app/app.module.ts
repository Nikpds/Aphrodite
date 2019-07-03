import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlickModule } from 'ngx-slick';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvitationComponent } from './invitation/invitation.component';
import { LocationComponent } from './location/location.component';
import { TheprogrammComponent } from './theprogramm/theprogramm.component';
import { DropboxComponent } from './dropbox/dropbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuoteComponent,
    AboutusComponent,
    InvitationComponent,
    LocationComponent,
    TheprogrammComponent,
    DropboxComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
