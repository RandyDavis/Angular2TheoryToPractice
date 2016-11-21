import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeComponent, JokeListComponent, AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        JokeComponent,
        JokeListComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }