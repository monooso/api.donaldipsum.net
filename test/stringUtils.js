'use strict';

var expect = require('chai').expect;
var subject = require('./../lib/stringUtils');

describe('string utils', function () {
    describe('ensureEndsWith', function () {
        it('should ensure an invalid string ends with specific characters', function () {
            expect(subject.ensureEndsWith('Input', '.')).to.equal('Input.');
            expect(subject.ensureEndsWith('In', 'put')).to.equal('Input');
        });

        it('should not alter a valid string', function () {
            expect(subject.ensureEndsWith('Input.', '.')).to.equal('Input.');
            expect(subject.ensureEndsWith('Input', 'put')).to.equal('Input');
        });
    });

    describe('stripLeadingPattern', function () {
        it('should strip a single character from the start of a string', function () {
            expect(subject.stripLeadingPattern('voodoo', 'v')).to.equal('oodoo');
        });

        it('should strip multiple characters from the start of a string', function () {
            expect(subject.stripLeadingPattern('voodoo', 'vo')).to.equal('odoo');
        });

        it('should strip a character group from the start of a string', function () {
            expect(subject.stripLeadingPattern('voodoo', '[vo]+')).to.equal('doo');
        });

        it('should support regular expression character classes', function () {
            expect(subject.stripLeadingPattern('--: begin', '\\W+')).to.equal('begin');
        });
    });

    describe('stripTrailingPattern', function () {
        it('should strip a single character from the end of a string', function () {
            expect(subject.stripTrailingPattern('Input.', '\\.')).to.equal('Input');
        });

        it('should strip multiple characters from the end of a string', function () {
            expect(subject.stripTrailingPattern('Bonobo', 'bo')).to.equal('Bono');
        });

        it('should strip a character group from the end of a string', function () {
            expect(subject.stripTrailingPattern('Bonobo', '[bo]+')).to.equal('Bon');
        });

        it('should support regular expression character classes', function () {
            expect(subject.stripTrailingPattern('Fix me, --.', '\\W+')).to.equal('Fix me');
        });
    });

    describe('limitWords', function () {
        it('should limit the number of words in a string', function () {
            expect(subject.limitWords('One two three', 2)).to.equal('One two');
        });

        it('should return the full string if it contains fewer words than the limit', function () {
            expect(subject.limitWords('One two three', 4)).to.equal('One two three');
        });

        it('should not count "words" comprised of punctuation characters', function () {
            expect(subject.limitWords('One, two & three', 3)).to.equal('One, two & three');
        });
    });

    describe('ucfirst', function () {
        it('should convert the first character to uppercase', function () {
            expect(subject.ucfirst('macOS')).to.equal('MacOS');
        });
    });

    describe('wordCount', function () {
        it('should count the number of words in a string', function () {
            expect(subject.wordCount('one two three')).to.equal(3);
        });

        it('should not count punctuation characters as words', function () {
            expect(subject.wordCount('one, two & three')).to.equal(3);
        });
    });
});
