import '../scss/main.scss';

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return '<h1>' + this.greeting + '</h1>';
    }
}

const greeter = new Greeter('Hello, my friend! Checkout your first ts app!');

document.body.innerHTML = greeter.greet();
