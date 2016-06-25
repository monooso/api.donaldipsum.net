'use strict';

module.exports = (function () {
    /**
     * Ensures that the given string ends with the given suffix.
     * @param   {string} input
     * @param   {string} suffix
     * @returns {string}
     */
    function ensureEndsWith(input, suffix) {
        return input.endsWith(suffix) ? input : input + suffix;
    }

    /**
     * Limits the given string to the specified number of words. Does not count punctuation as a
     * word.
     * @param   {string} input
     * @param   {int}    count
     * @returns {string}
     */
    function limitWords(input, count) {
        var wordCount;

        wordCount = 0;

        return input.split(' ').reduce(function (previous, current) {
            if (wordCount >= count) {
                return previous;
            }

            if (current.search(/^\W*$/) === -1) {
                wordCount = wordCount + 1;
            }

            // Trim is required because of the initial blank string value for previous.
            return (previous + ' ' + current).trim();
        }, '');
    }

    /**
     * Strips the characters matching the given regular expression pattern from the start of the
     * given string. Don't forget to double-escape slashes (e.g. `\\.` for a literal period; `\\w`
     * for a word character).
     * @param   {string} input
     * @param   {string} pattern
     * @returns {string}
     */
    function stripLeadingPattern(input, pattern) {
        return input.replace(new RegExp('^' + pattern + '(.*)$'), '$1');
    }

    /**
     * Strips the characters matching the given regular expression pattern from the end of the given
     * string. Don't forget to double-escape slashes (e.g. `\\.` for a literal period; `\\w` for a
     * word character).
     * @param   {string} input
     * @param   {string} pattern
     * @returns {string}
     */
    function stripTrailingPattern(input, pattern) {
        return input.replace(new RegExp('^(.*?)' + pattern + '$'), '$1');
    }

    /**
     * Capitalises the first letter of the given string.
     * @param   {string} input
     * @returns {string}
     */
    function ucfirst(input) {
        return input[0].toLocaleUpperCase() + input.substr(1);
    }

    /**
     * Counts the number of words in the given string. Does not count punctuation as a word.
     * @param   {string} input
     * @returns {int}
     */
    function wordCount(input) {
        var count;

        count = 0;

        return input.split(' ').reduce(function (previous, current) {
            if (current.search(/^\W+$/) === -1) {
                count = count + 1;
            }

            return count;
        }, '');
    }

    return {
        ensureEndsWith: ensureEndsWith,
        limitWords: limitWords,
        stripLeadingPattern: stripLeadingPattern,
        stripTrailingPattern: stripTrailingPattern,
        ucfirst: ucfirst,
        wordCount: wordCount,
    };
}());
