'use strict';

var fs;
var path;

fs = require('fs');
path = require('path');

/**
 * Returns an array of transcript filenames.
 * @returns {array}
 */
function getTranscriptFiles() {
    return [
        '20150616-candidacy-announcement.txt',
        '20160220-victory-speech.txt',
        '20160613-orlando-shooting-speech.txt',
    ];
}

/**
 * Returns the contents of the transcript file with the given name.
 * @param   {string} filename
 * @returns {string}
 */
function getFileContents(filename) {
    return fs.readFileSync(path.join(__dirname, '/../transcripts/', filename))
        .toString()
        .replace('"', '');
}

/**
 * Loads the contents of the transcript files.
 * @returns {string}
 */
function loadTranscripts() {
    return getTranscriptFiles().map(function (filename) {
        return getFileContents(filename);
    }).join(' ');
}

module.exports = loadTranscripts();
