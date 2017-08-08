# StreamGuess

StreamGuess is a web app guessing game where players are presented random popular Twitch.tv clips, and they must guess which streamer it is.

The app is split into 2 main parts:

1) Angular Front-End: This acts as the client for the game. The code here is focused on the Angular 4 Client. Written in Typescript, Javascript, CSS, HTML.

2) Node.js & Python based Back-end server: A custom REST API to deploy the streamers and clips hosted on AWS. Python scripts running as a CronTab job query the Twitch API to gather the streamer data and construct urls that lead to the .mp4 files of the clips in order to hide any information that could give away the answer. The API stores info on AWS using MongoDB.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
