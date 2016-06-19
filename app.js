'use strict';

var app;
var generator;
var seedText;

app = require('express')();
seedText = require('./lib/transcriptLoader');
generator = require('./lib/generator')(seedText);

/**
 * Builds a "success" response object.
 * @param   {*} content
 * @returns {object}
 */
function buildSuccessfulResponse(content) {
    return {
        success: true,
        content: content,
    };
}

/**
 * Builds an "error" response object.
 * @param   {*} error
 * @returns {object}
 */
function buildErrorResponse(error) {
    return {
        success: false,
        content: error,
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
 * Handles 404 errors.
 */
app.use(function(req, res, next) {
    res.status(404).json(buildErrorResponse('Unsupported endpoint'));
});

/**
 * Starts the server.
 */
app.listen(process.env.PORT, function () {
    console.log('Application started.');
});
