# DonaldIpsum API #
The DonaldIpsum API generates all the best words for you to use. Trust me, these are great.

## Endpoints ##
The API exposes three endpoints, relative to the base `/v1.0.0/` URL. Each endpoint accepts an optional `count` query string parameter.

| Verb | Endpoint      |
|:----:|:-------------:|
| GET  | `paragraphs` |
| GET  | `sentences`  |
| GET  | `words`      |

## Response ##
The JSON response is an object of the form:

```json
{
  "success": true,
  "content": [ "Response content" ]
}
```

Some things worth noting:

- In the event of a successful call to the `paragraphs` endpoint, `content` will contain an array of paragraphs.
- In the event of a successful call to the `sentences` endpoint, `content` will contain an array of sentences.
- In the event of a successful call to the `words` endpoint, `content` is an array containing a single string.
- In the event of an error, `success` is `false`, and `content` is an array of error strings.
