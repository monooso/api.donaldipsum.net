# DonaldIpsum API #
The DonaldIpsum API generates all the best words for you to use. Trust me, these are great.

## Overview ##
The API is accessed over HTTPS, at `https://api.donaldipsum.net/{version}/`.

The current version of the API is `v1`, meaning that the full API "base" URL is `https://api.donaldipsum.net/v1/`. All of the endpoints described in this document are relative to this base URL.

All data is sent and received as JSON.

## `GET paragraphs` ##
The `GET paragraphs` endpoint returns zero or more paragraphs of Donald Ipsum content.

| Parameter | Type    | Location     | Default value |
|:---------:|:-------:|:------------:|:-------------:|
| `count`   | Integer | Query string | `3`           |

### Example request ###

```bash
curl https://api.donaldipsum.net/v1/paragraphs?count=2
```

### Example response ###

```json
{
  "success": true,
  "content": [
    "First paragraph",
    "Second paragraph"
  ]
}
```

## `GET sentences` ##
The `GET sentences` endpoint returns zero or more sentences of Donald Ipsum content.

| Parameter | Type    | Location     | Default value |
|:---------:|:-------:|:------------:|:-------------:|
| `count`   | Integer | Query string | `3`           |

### Example request ###

```bash
curl https://api.donaldipsum.net/v1/sentences?count=2
```

### Example response ###

```json
{
  "success": true,
  "content": [
    "Let's make America great again!",
    "I am officially running for president of Afghanistan."
  ]
}
```

## `GET words` ##
The `GET words` endpoint returns zero or more words of Donald Ipsum content.

| Parameter | Type    | Location     | Default value |
|:---------:|:-------:|:------------:|:-------------:|
| `count`   | Integer | Query string | `10`          |

### Example request ###

```bash
curl https://api.donaldipsum.net/v1/words?count=5
```

### Example response ###

```json
{
  "success": true,
  "content": [
    "Look at my tiny hands"
  ]
}
```

## Error responses ##
All error responses return the appropriate HTTP status code, and the following JSON structure:

```json
{
  "success": false,
  "content": [
    "First error message",
    "Second error message",
    "And so forth"
  ]
}
```
