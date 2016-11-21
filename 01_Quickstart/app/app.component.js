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
var Joke = (function () {
    function Joke(setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    Joke.prototype.toggle = function () {
        this.hide = !this.hide;
    };
    return Joke;
}());
var joke = new Joke("What did the cheese say when it looked in the mirror?", "Halloumi (Hello me!)");
var JokeComponent = (function () {
    function JokeComponent() {
    }
    return JokeComponent;
}());
__decorate([
    core_1.Input('joke'),
    __metadata("design:type", Joke)
], JokeComponent.prototype, "data", void 0);
JokeComponent = __decorate([
    core_1.Component({
        selector: 'joke',
        template: "\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ data.setup }}</h4>\n      <p class=\"card-text\" [hidden]=\"data.hide\">{{ data.punchline }}</p>\n      <button class=\"btn btn-primary\" (click)=\"data.toggle()\">Tell Me!</button>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], JokeComponent);
exports.JokeComponent = JokeComponent;
var JokeListComponent = (function () {
    function JokeListComponent() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror?", "Halloumi (Hello me!)"),
            new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought, 'That\'s not very mature'")
        ];
    }
    return JokeListComponent;
}());
JokeListComponent = __decorate([
    core_1.Component({
        selector: 'joke-list',
        template: "\n    <joke *ngFor=\"let j of jokes\" [joke]=\"j\"></joke>\n  "
    }),
    __metadata("design:paramtypes", [])
], JokeListComponent);
exports.JokeListComponent = JokeListComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n        <joke-list></joke-list>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map