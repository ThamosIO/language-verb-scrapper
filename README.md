# Usage

## Install

First and foremost, install `direnv`.

```bash
# macOS
$ brew install direnv

# Debian-like
$ apt install direnv
```

Then :

```bash
$ direnv allow
```

Install npm modules :

```bash
$ npm i
```

## Configuration

You should set in your `.envrc` the language configuration you're looking for.

This consists of three variables `LANG`, `CONJUGATION`, `LANGUAGE` which will be used to build the URL used for the scrapping.

A few examples :

```bash
# French to Italian

export LANG=fr
export CONJUGATION=conjugaison
export LANGUAGE=italien
```

```bash
# English to French

export LANG=en
export CONJUGATION=conjugation
export LANGUAGE=french
```

The next step is set the verbs you want to scrap, this is done in `verbs.json` at the root.

Simply put them as an array of strings in the language you're trying to learn (should be the same as `LANGUAGE`),

```json
["stare", "mangiare", "bere", "essere"]
```

## Scrapping the data

Once everything is set up, you can start the scrapping using `npm start`.

This will create a json file `scrapped-verbs.json`.

## Changing the format of data

If the format of the verbs is not to your liking, you can set the fields and the way you scrap them in `constants.js`.
