import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {JokeComponent, JokeListComponent, AppComponent, JokeFormComponent} from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        JokeComponent,
        JokeListComponent,
        JokeFormComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }