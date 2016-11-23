/// <reference path="./typings/index.d.ts" />
/********** TYPES *************/
var decimal = 6;
var done = false;
var color = "blue";
var list = [1, 2, 3];
var groceryList = [1, 2, 3];
var func = function () { return console.log('Hello'); };
function returnNumber() {
    return 1;
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var go;
go = Direction.Up;
var Person = (function () {
    function Person() {
    }
    return Person;
}());
;
var person;
var people;
var notSure = 1;
notSure = 'hello';
function returnNothing() {
    console.log('Moo');
}
// Type assertion - where we know what an explicit value should be a type of when returned
var value = 'Randy Davis';
value.length;
// Generics - reusable bits of code that can take advantage of TS features
var Audio = (function () {
    function Audio() {
    }
    return Audio;
}());
var Video = (function () {
    function Video() {
    }
    return Video;
}());
var Link = (function () {
    function Link() {
    }
    return Link;
}());
var Text = (function () {
    function Text() {
    }
    return Text;
}());
var Post = (function () {
    function Post() {
    }
    return Post;
}());
var videoPost;
var answer;
answer = 42;
