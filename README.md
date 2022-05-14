<!--Put badges at the very top -->
<!-- Travis CI: change the repos (required) -->
<!-- Metrics collection: Follow the setup instructions for the appropriate client in https://github.com/IBM/metrics-collector-service (required) -->
<!-- remove metrics badge if no metrics collection is performed -->

# Welcome to Multi Step Form!

Multi Step Form is an **event-based** javascript package that makes building multi-step forms straightforward and easy. encourages good form design by providing an API that allows you to build **customizable** multi-step forms that bring in high conversion rates to your sales process, marketing funnel, etc. Multi Step Form encourages good form design

# Architecture

At it's core Multi Step Form has an event manager that handles all form events including attaching and removing any event listeners to the form's DOM structure. The eevnt manager dispatches events to the other layers that are built on top of this core event layer that handle form UI (Service layer) and form State (State Layer). The diagram below gives a rough overview of this design.

![Architechture](architecture.png 'Architechture')

# Contributing

1. Clone the `Multi-Step-Form` repo locally.
2. Make a new branch: `$ git checkout -b [name-of-your-branch]`.
3. Add a feature, fix a bug, refactor some code or update the docs :)
4. Write/update tests for the changes you made, if necessary.
5. Run unit tests to make sure all everything is working nice ;).
6. Update `README.md` if necessary.
7. Open a Pull Request with a comprehensive description of changes.

### 1. Clone the repo

Clone the `Multi-Step-Form` repo locally and navigate into it. In a terminal, run:

```
$ git clone https://github.com/CodeBase912/Multi-Step-Form.git
$ cd Multi-Step-Form
```

### 2. Make a new branch

Make a new branch in which you will make your contributions. Run the following command:

```
$ git checkout -b [name-of-your-branch]
```

### 3. Add a feature, fix a bug, refactor some code or update the docs :)

Add your changes and document your code explaining what it does. The more (comments) the merrier, makes it easier for anyone to understand your work.

### 4. Write/update tests for the changes you made, if necessary

Write/update unit tests if you make any changes to the codebase.

### 5. Run unit tests to make sure all everything is working nice ;)

Make sure all the tests pass before making a pull request. Enter the following command
in the root folder of the project to run unit tests:

```
$ npm run test
```

Please make sure all the tests are passed and linting rules are follwed before you commit any changes. To run the automated linter, in your terminal run:

```
$ npm run lint
```

This will check, fix the format of your code to ensure a uniform code style throughout the codebase and report any typescript issues.

### 6. Update `README.md` if necessary

Please document your changes in the `README.md` file if necessary

### 7. Open a Pull Request with a comprehensive description of changes.

Any pull-request you contribute will run through our continuous integration process which will check your code style.

## Featured technologies

- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

# License

[MIT](LICENSE)
