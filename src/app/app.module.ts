import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { MoviesService } from './movies.service';




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
   
    FooterComponent,
    DisplayComponent
     ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
