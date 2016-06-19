'use strict';

var app;
var generator;
var seedText;

app = require('express')();
seedText = require('./lib/transcriptLoader');
generator = require('./lib/generator')(seedText);

/*
https://api.donaldipsum.net/v1.0.0/words?count=10
https://api.donaldipsum.net/v1.0.0/sentences?count=3
https://api.donaldipsum.net/v1.0.0/paragraphs?count=3

{
   "success": true,
   "content": ["Trust me."]
}
*/

/**
 * Builds a "success" response object.
 * @param   {string} content
 * @returns {boolean}
 */
function buildSuccessfulResponse(content) {
    return {
        success: true,
        content: content,
    };
}

/**
 * Generates an arbitrary number of paragraphs.
 */
app.get('/:version/paragraphs', function (req, res) {
    var content;
    var count;

    // Default to 3 paragraphs.
    count = req.query.count || 3;
    content = generator.generateParagraphs(count);

    res.status(200).json(buildSuccessfulResponse(content));
});

/**
 * Generates an arbitrary number of sentences.
 */
app.get('/:version/sentences', function (req, res) {
    var content;
    var count;

    // Default to 3 sentences.
    count = req.query.count || 3;
    content = generator.generateSentences(count);

    res.status(200).json(buildSuccessfulResponse(content));
});

/**
 * Generates an arbitrary number of words.
 */
app.get('/:version/words', function (req, res) {
    var content;
    var count;

    // Default to 10 words.
    count = req.query.count || 10;
    content = [generator.generateWords(count)];

    res.status(200).json(buildSuccessfulResponse(content));
});

/**
 * Starts the server.
 */
app.listen(8080, function () {
    console.log('Application started.');
});
