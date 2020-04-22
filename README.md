# heroku-ci-demo

A continuous integration demo app using Node.js and [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running the App Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/thawkin3/heroku-ci-demo # or clone your own fork
$ cd heroku-ci-demo
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Running Tests Locally

- `npm test`: runs the JavaScript unit tests via [Jest](https://jestjs.io/) and [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- `npm run cypress:test`: runs the integration tests via [Cypress](https://www.cypress.io/)

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

For more information about the DOM Testing Library and JSDOM, see these articles:

- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [JSDOM](https://github.com/jsdom/jsdom#executing-scripts)
- [dev.to Article](https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja)
- [Forum Question](https://spectrum.chat/testing-library/help-dom/test-plain-html-vanilla-js~9f56a169-ea3f-481b-b1cc-dd9fc70dbeaf)
