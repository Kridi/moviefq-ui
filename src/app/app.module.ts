import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LogoComponent,
    AppComponent,
    MenuComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
