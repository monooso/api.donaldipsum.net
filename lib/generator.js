'use strict';

module.exports = function (seed) {
    const Markov = require('libmarkov');
    let generator;
    let utils;

    generator = new Markov(seed);
    utils = require('./stringUtils');

    /**
     * "Normalises" the given sentence.
     * @param   {string} input
     * @returns {string}
     */
    var normalizeSentence = function (input) {
        var output;

        // Ensuring we have matching quotes and parentheses is just too troublesome.
        output = input.replace(/["\(\)]/g, '');

        output = utils.ucfirst(output);
        output = utils.stripLeadingPattern(output, '\\W+');
        output = utils.stripTrailingPattern(output, '\\W+');
        output = utils.ensureEndsWith(output, '.');

        return output;
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
            sentences.push(normalizeSentence(generator.generateSentence()));
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

        words = '';

        do {
            words = words + generateSentences(1)[0];
        } while (utils.wordCount(words) < count);

        return utils.limitWords(words, count);
    };

    // The public API.
    return {
        generateParagraphs: generateParagraphs,
        generateSentences: generateSentences,
        generateWords: generateWords,
    };
};
