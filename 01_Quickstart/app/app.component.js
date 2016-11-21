"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var JokeComponent = (function () {
    function JokeComponent() {
        this.setup = "What did the cheese say when it looked in the mirror?";
        this.punchline = "Halloumi (Hello me!)";
    }
    return JokeComponent;
}());
JokeComponent = __decorate([
    core_1.Component({
        selector: 'joke',
        template: "\n    <h1>{{ setup }}</h1>\n    <p>{{ punchline }}</p>\n  "
    }),
    __metadata("design:paramtypes", [])
], JokeComponent);
exports.JokeComponent = JokeComponent;
var JokeListComponent = (function () {
    function JokeListComponent() {
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
    JokeListComponent.prototype.toggle = function (joke) {
        joke.hide = !joke.hide;
    };
    return JokeListComponent;
}());
JokeListComponent = __decorate([
    core_1.Component({
        selector: 'joke-list',
        template: "\n    <div *ngFor=\"let joke of jokes\" class=\"card card-block\">\n      <h4 class=\"card-title\">{{ joke.setup }}</h4>\n      <p class=\"card-text\" [hidden]=\"joke.hide\">{{ joke.punchline }}</p>\n      <button class=\"btn btn-primary\" (click)=\"toggle(joke)\">Tell Me!</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], JokeListComponent);
exports.JokeListComponent = JokeListComponent;
// @NgModule({
//     imports: [BrowserModule],
//     declarations: [JokeComponent, JokeListComponent],
//     bootstrap: [JokeListComponent]
// })
// export class AppModule {
// }
// platformBrowserDynamic().bootstrapModule(AppModule); 
//# sourceMappingURL=app.component.js.map