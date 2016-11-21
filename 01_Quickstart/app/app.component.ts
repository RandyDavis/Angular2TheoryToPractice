import {Component} from '@angular/core';

class Joke {
    setup: string;
    punchline: string;
    hide: boolean;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}

let joke = new Joke("What did the cheese say when it looked in the mirror?", "Halloumi (Hello me!)");

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
      <button class="btn btn-primary" (click)="joke.toggle(joke)">Tell Me!</button>
    </div>
  `
})

export class JokeListComponent {
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror?", "Halloumi (Hello me!)"),
            new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought, 'That\'s not very mature'")
        ];
    }
}
