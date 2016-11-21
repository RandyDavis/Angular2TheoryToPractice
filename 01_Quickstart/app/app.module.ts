import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeComponent, JokeListComponent } from './app.component';

// import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [JokeComponent, JokeListComponent],
    bootstrap: [JokeListComponent]
})

export class AppModule { }