# Take Note! (Notes app)

This app, although simple, is intended to be a demonstration of my abilities as a front-end developer.

It is the best I can make it using my current skills of React, CSS, Testing, CI/CD, and tooling.

## Run

1. `yarn install`
2. `yarn start`

## Test

### Unit and Integration

1. `yarn install`
2. `yarn test`

### E2E

1. `yarn install`
2. `yarn start`
3. Open another terminal
4. `yarn cypress:open`

## Pipelines

The app has two pipelines in place using GitHub Actions

### CI

![CI](https://github.com/Reignable/notes-app/workflows/CI/badge.svg)

The CI pipeline runs when a pull request is opened

1. Checks the app builds
2. Runs unit and integration tests as above

### CD

![CD](https://github.com/Reignable/notes-app/workflows/CD/badge.svg)

The CD pipeline runs when there's a push to master

1. Deploys the app to the [staging environment](https://reignable-notes-app-staging.herokuapp.com)
2. Runs Cypress E2E tests against that environment
3. If the tests pass, deploys to [production environment](https://reignable-notes-app-production.herokuapp.com)
