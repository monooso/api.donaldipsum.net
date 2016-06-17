'use strict';

module.exports = function (seed) {
    const Markov = require('libmarkov');
    let generator;

    generator = new Markov(seed);

    /**
     * Splits the given string into an array of words.
     * @param   {string} words
     * @returns {array}
     */
    var splitWordsIntoArray = function (words) {
        return words.split(' ');
    };

    /**
     * Strips double-quotes from the given string.
     * @param   {string} input
     * @returns {string}
     */
    var stripDoubleQuotes = function (input) {
        return input.replace(/"/g, '');
    };

    /**
     * Returns a random integer within the given bounds.
     * @param   {int} min
     * @param   {int} max
     * @returns {int}
     */
    var generateRandomInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    /**
     * Generates a string containing the specified number of paragraphs.
     * @param   {int} count
     * @returns {array}
     */
    var generateParagraphs = function (count) {
        var paragraphs;

        paragraphs = [];

        while (count--) {
            paragraphs.push(generateSentences(generateRandomInteger(1, 4)).join(' '));
        }

        return paragraphs;
    };

    /**
     * Generates a string containing the specified number of sentences.
     * @param   {int} count
     * @returns {array}
     */
    var generateSentences = function (count) {
        var sentences;

        sentences = [];

        while (count--) {
            sentences.push(stripDoubleQuotes(generator.generateSentence()));
        }

        return sentences;
    };

    /**
     * Generates a string containing the specified number of the best words.
     * @param   {int} count
     * @returns {string}
     */
    var generateWords = function (count) {
        var words;

        words = [];

        while (words.length < count) {
            words = words.concat(splitWordsIntoArray(generateSentences(1)[0]));
        }

        return words.slice(0, count).join(' ');
    };

    // The public API.
    return {
        generateParagraphs: generateParagraphs,
        generateSentences: generateSentences,
        generateWords: generateWords,
    };
};
