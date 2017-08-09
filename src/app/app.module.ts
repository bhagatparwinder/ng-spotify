import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        NavbarComponent,
        AboutComponent
    ],
    imports: [BrowserModule, routing],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
