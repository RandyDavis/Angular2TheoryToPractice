import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Component} from '@angular/core';

@Component({
    selector: 'joke',
    template: `
    <h1>{{ setup }}</h1>
    <p>{{ punchline }}</p>
  `
})

export class JokeComponent {
    setup: string;
    punchline: string;

    constructor() {
        this.setup = "What did the cheese say when it looked in the mirror?";
        this.punchline = "Halloumi (Hello me!)";
    }
}

@Component({
    selector: 'joke-list',
    template: `
    <div *ngFor="let joke of jokes" class="card card-block">
      <h4 class="card-title">{{ joke.setup }}</h4>
      <p class="card-text" [hidden]="joke.hide">{{ joke.punchline }}</p>
      <button class="btn btn-primary" (click)="toggle(joke)">Tell Me!</button>
    </div>
  `
})

export class JokeListComponent {
    jokes: Object[];

    constructor() {
        this.jokes = [
            {
                setup: "What did the cheese say when it looked in the mirror?",
                punchline: "Halloumi (Hello me!)",
                hide: true
            },
            {
                setup: "What kind of cheese do you use to disguise a small horse?",
                punchline: "Mask-a-pony (Mascarpone)",
                hide: true
            },
            {
                setup: "A kid threw a lump of cheddar at me",
                punchline: "I thought, 'That\'s not very mature'",
                hide: true
            }
        ];
    }

    toggle(joke) {
        joke.hide = !joke.hide;
    }
}





// @NgModule({
//     imports: [BrowserModule],
//     declarations: [JokeComponent, JokeListComponent],
//     bootstrap: [JokeListComponent]
// })
// export class AppModule {
// }

// platformBrowserDynamic().bootstrapModule(AppModule);