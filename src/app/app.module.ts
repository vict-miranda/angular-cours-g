import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';

import { HeroesService } from './services/heroes.service';
import { SearchComponent } from './components/search/search.component';
import { HeroeComponent } from './components/heroe/heroe.component';

import { HttpErrorInterceptor } from '../app/interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DetailComponent,
    HomeComponent,
    SearchComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HeroesService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
