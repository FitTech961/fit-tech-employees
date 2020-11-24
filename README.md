# FitTech

An application used to add, edit and delete employees, built with React, Redux, Typescript and CSS, deployed on Firebase.
You can login using admin credentials provided by author. It run with:

1. A microservice via JSON API, built with Node.js and deployed on heroku.
2. MongoDB atlas that holds employee's data and admin credentials.

## Requirements

For development, you will only need [Node.js](http://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Typescript](https://www.typescriptlang.org/) installed on your environement.

## Live Demo

Check out the live demo here: https://fittech-19c39.web.app/#/

![FitTech](./readme/fittech.gif)

## Commands

|       command                |                    action                                  |
| :-------------------------:  | :--------------------------------------------------------: |
|     `yarn install`           |    Downloads project dependencies                          |
|     `yarn start`             |    Runs the app in the development mode                    |
|     `yarn build`             |    Builds the app for production to the build folder       |
|     `yarn serve`             |    Starts a static server to serve production build        |
|     `yarn cli:install`       |    Downloads the interactive cli dependencies              |
|     `yarn cli:create`        |    Generate template file/s using the cli tool             |

## Structure

The project root directory structure is as follows:

```
  '|-- <root>',
  '    |-- cli',
  '    |-- public',
  '    |-- readme',
  '    |-- src',
  '        |-- assets',
  '        |-- config',
  '        |-- features',
  '        |   |-- applicationState',
  '        |   |-- login',
  '        |   |-- landing',
  '        |       |-- employees',
  '        |-- locales',
  '        |-- route',
  '        |-- store',
  '        |-- styled',
  '        |-- utils',
  ''
```

Following the "features" or "ducks" pattern organizes the folders in the following manner: 

* [`/cli`](cli)         for the interactive cli that generates project template files.
* [`/public`](public)         for public files
* [`/readme`](readme)         for assets used in [`README.md`](README.md)
* [`/src`](src)            for all source files
* [`src/assets`](src/assets)      for assets (.png, .svg, etc ...)
* [`src/config`](src/config)      for configuration files (urls, etc ...)
* [`src/features`](src/features)    for project features (login, landing, employees, ...)
* [`src/locales`](src/locales)       for i18n localization files (en, ar ...)
* [`src/store`](src/store)       for redux configurations (combineReducers, middlewares, persist etc ...)
* [`src/styled`](src/styled)      for multiple use stateless styled components 
* [`src/utils`](src/utils)      for utils used throughout the project 

### features

As opposed to dividing files into `containers` for logic and `components` for presentation then putting redux logic in a separate folder, this project couples logic, presentation and redux state for each feature separately. Thus, redux state is divided into "slices" where each slice is coupled with a feature.

#### locales & i18n

This project supports adding internationalization (i18n) for multiple languages. [`i18n.ts`](src/config/i18n.ys) under the [`config`](src/config) folder contains configuration for i18n. The locales provided for this configuration are located under [`locales`](src/locales) folder. Namely, [`locales`](src/locales) include files such as [`en.ts`](src/locales/en.ts) for English and [`ar.ts`](src/locales/ar.ts) for Arabic.

### path alias

Supports path aliases to shorten `import` statements. Ex : for accessing a deeply nested module from another, use `&<some module>/<some file>` instead of `../../<some module>/<some file>` and so on.

For adding new path aliases, follow these two steps: 

1. Add `"&<your alias>/*": ["path/to/your/alias/*"]` in [`tsconfig.paths.json`](tsconfig.paths.json)

2. Add `"&<your alias>": path.resolve(__dirname, "path/to/your/alias")` in [`config-overrides.js`](config-overrides.js)

Note:

* You can remove or replace "&" symbol with any other symbol, but make sure to be consistent.

* Reload or restart your IDE or text editor for configurations to appear.

## Project Features

- [Typescript](https://www.typescriptlang.org/) for scalability, code clarity, ease of debugging, etc ... 
- [redux-toolkit](https://redux-toolkit.js.org/) toolset for efficient Redux development
- [redux-persist](https://github.com/rt2zz/redux-persist) to persist and rehydrate Redux store
- [react-i18next](https://react.i18next.com/) for internationalization and localization
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) for routing, with [redux-first-history](https://github.com/salvoravida/redux-first-history) middleware
- [ant-design](https://ant.design/) for responsive high quality reusable components and forms
- fully functional components
- cli tool to generate template files that follow project pattern.
- path aliases to reduce import statements' length 

## Linting

The project is linted using eslint and prettier you can find the configuration files in the root `.eslintrc.json` & `.prettierrc`.

## Hosting

As mentioned above the project is deployed on firebase for demo purposes. [Steps followed](https://dev.to/sama/deploying-a-react-app-to-firebase-2lda).
