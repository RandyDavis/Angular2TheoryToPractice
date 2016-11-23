/// <reference path="./typings/index.d.ts" />

/********** TYPES *************/
let decimal: number = 6;
let done: boolean = false;
let color: string = "blue";

let list: number[] = [1, 2, 3];
let groceryList: Array<number> = [1, 2, 3];

let func: Function = () => console.log('Hello');

function returnNumber(): number {
    return 1;
}

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let go: Direction;
go = Direction.Up;

class Person {};
let person: Person;
let people: Person[];

let notSure: any = 1;
notSure = 'hello';

function returnNothing(): void {
    console.log('Moo');
}

// Type assertion - where we know what an explicit value should be a type of when returned
let value: any = 'Randy Davis';
(<string>value).length;

// Generics - reusable bits of code that can take advantage of TS features
class Audio {}
class Video {}
class Link {}
class Text {}

class Post<T> {
    content: T;
}

let videoPost: Post<Video>;

let answer: number;
answer = 42;




