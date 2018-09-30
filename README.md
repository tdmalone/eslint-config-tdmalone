# eslint-config-tdmalone

My personal shareable [ESLint](https://eslint.org/) config.

Heavily influenced by the [WordPress style](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/). Includes [ESLint recommended rules](https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js). For use in either browser or Node. Support for [ES2018](https://node.green/#ES2018), [Jest](https://jestjs.io/), [JSDoc](http://usejsdoc.org/) and [jQuery](https://jquery.com/).

This is a heavily opinionated config, but I'm open to any suggestions. Feel free to [file issues](https://github.com/tdmalone/eslint-config-tdmalone/issues/new) or open PRs.

## Installation

Install globally to use on any project:

    yarn global add eslint-config-tdmalone

Install locally to one project:

    yarn add --dev eslint-config-tdmalone

You'll also need to have [ESLint](https://eslint.org/) installed in the same manner.

## Usage

Add this to your `.eslintrc.js` file:

    module.exports = {
      'extends': [ 'tdmalone' ]
    };

Then:
* Using globally?  
  Run `eslint "**/*.js"`.

* Using locally?  
  Add `"lint": "eslint \"**/*.js\""` to your `package.json`'s `"scripts"` section, then run `yarn lint`

### Additional Tips

* Outputting code coverage reports with Jest? Add `--ignore-pattern coverage/` to your `eslint` command.
* Want ESLint to list the filenames it is linting, even if everything passes? Add `DEBUG=eslint:cli-engine ` _before_ your `eslint` command.

## License

[MIT](LICENSE).
