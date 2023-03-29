This is the source code for my personal website - [omrilavi.com](http://www.omrilavi.com)

The application is built using [Gatsby.js](https://www.gatsbyjs.org/), and deployed through [Netlify](https://www.netlify.com/).
Unittests are written with [Jest](https://jestjs.io/), and "e2e" tests are written using [Cypress](https://www.cypress.io/).
[Storybook](https://storybook.js.org/) can be used for developing specific components.

#### Static site generation flow

For now, the website contains a static list of posts which is manually maintained.
For each one of the posts, the metadata (ike image, title, etc) is being fetched and loaded into the homepage template.

#### Unittests

Jest unittests will run with the command

```shell script
yarn test
```

#### "e2e" tests

Cypress tests are meant to run on the built production app, right before the deployment itself.
To generate the application run

```shell script
yarn build
```

And in order to run Cypress tests on the generated application, run one of the following commands:

```shell script
yarn test:e2e    # Opens cypress
yarn test:e2e:ci # Runs cypress in headless mode (used for CI)
```

#### Deployment

After each commit to the `master` branch, Netlify will trigger the following command:

```shell script
yarn test-and-build
```

This command runs the unittests, creates the application (under `/public` folder), and runs the "e2e" tests using Cypress.
If all steps are successful, the application will be deployed.
