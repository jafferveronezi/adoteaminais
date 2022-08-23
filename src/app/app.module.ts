import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderareaComponent } from './sliderarea/sliderarea.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AdotarComponent } from './adotar/adotar.component';
import { ApadrinharComponent } from './apadrinhar/apadrinhar.component';
import { ContatoComponent } from './contato/contato.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderareaComponent,
    FooterComponent,
    AboutComponent,
    AdotarComponent,
    ApadrinharComponent,
    ContatoComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
