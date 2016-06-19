'use strict';

let expect;
let generator;

expect = require('chai').expect;
generator = require('../lib/generator');

describe('generator', function () {
    let seed;
    let subject;

    beforeEach(function () {
        seed = 'We were somewhere around Barstow, on the edge of the desert, when the drugs began to take hold';
        subject = generator(seed);
    });

    describe('generateParagraphs', function () {
        it('should generate a string containing a specific number of paragraphs', function () {
            expect(subject.generateParagraphs(5).length).to.equal(5);
        });
    });

    describe('generateSentences', function () {
        it('should generate a string containing a specific number of sentences', function () {
            expect(subject.generateSentences(5).length).to.equal(5);
        });

        it('should ensure the sentence starts with an uppercase letter', function () {
            let output;
            let subject;

            subject = generator('tab toe tip');
            output = subject.generateSentences(1)[0];

            expect(output[0]).to.equal('T');
        });

        it('should ensure the sentence ends with a period', function () {
            let output;
            let subject;

            subject = generator('tab toe tip');
            output = subject.generateSentences(1)[0];

            expect(output[output.length - 1]).to.equal('.');
        });
    });

    describe('generateWords', function () {
        it('should generate a string containing a specific number of words', function () {
            expect(subject.generateWords(5).split(' ').length).to.equal(5);
        });

        it('should generate a string containing an awful lot of words', function () {
            expect(subject.generateWords(150).split(' ').length).to.equal(150);
        });

        it('should strip double-quotes from the string', function () {
            let output;
            let subject;

            subject = generator('Remove "these quotes"');
            output = subject.generateWords(20);

            expect(output.indexOf('"')).to.equal(-1);
        });
    });
});
