'use strict';

var app;
var generator;
var seedText;

app = require('express')();
seedText = require('./lib/transcriptLoader');
generator = require('./lib/generator')(seedText);

/**
 * Ensures that the response "content" property is an array.
 * @param   {*} content
 * @returns {array}
 */
function normalizeResponseContent(content) {
    return content instanceof Array ? content : [content];
}

/**
 * Builds a "success" response object.
 * @param   {*} content
 * @returns {object}
 */
function buildSuccessResponse(content) {
    return {
        success: true,
        content: normalizeResponseContent(content),
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
        content: normalizeResponseContent(error),
    };
}

/**
 * Generates an arbitrary number of paragraphs.
 */
app.get('/v1/paragraphs', function (req, res) {
    var count;

    // Default to 3 paragraphs.
    count = req.query.count || 3;

    res.status(200).json(buildSuccessResponse(generator.generateParagraphs(count)));
});

/**
 * Generates an arbitrary number of sentences.
 */
app.get('/v1/sentences', function (req, res) {
    var count;

    // Default to 3 sentences.
    count = req.query.count || 3;

    res.status(200).json(buildSuccessResponse(generator.generateSentences(count)));
});

/**
 * Generates an arbitrary number of words.
 */
app.get('/v1/words', function (req, res) {
    var count;

    // Default to 10 words.
    count = req.query.count || 10;

    res.status(200).json(buildSuccessResponse(generator.generateWords(count)));
});

/**
 * Handles 404 errors.
 */
app.use(function (req, res) {
    res.status(404).json(buildErrorResponse('Unsupported endpoint'));
});

/**
 * Handles internal errors.
 */
app.use(function (err, req, res) {
    res.status(err.status || 500).json(buildErrorResponse(err.name + ' ' + err.message));
});

/**
 * Starts the server.
 */
app.listen(process.env.PORT, function () {
    console.log('Application started.');
});
