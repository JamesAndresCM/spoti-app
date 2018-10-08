import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// routes
import { APP_ROUTING  } from './app.routes';

// pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { SecureDomPipe } from './pipes/securedom.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    SecureDomPipe,
    CardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
