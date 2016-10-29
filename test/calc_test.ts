/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import Calculator from '../src/ts/calc';

describe('Calculator', () => {
    it('Calculator object should be defined', () => {
       Calculator.should.be.not.undefined;
    });

    it('subject should be defined', () => {
        const subject = new Calculator();
        Calculator.should.be.not.undefined;
    });
    it('should add two numbers together', () => {
        const subject = new Calculator();
        const result : number = subject.add(2, 3);
        result.should.be.equal(5);
    });
});
