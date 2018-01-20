# eslint-config-tdmalone

My personal shareable [ESLint](https://eslint.org/) config. Based mainly on [@chromatix/eslint-config-chromatix](https://github.com/ChromatixAU/eslint-config-chromatix/) but with some of my own changes.

I'm open to any suggestions - feel free to file issues!

## Installation

Install globally to use on any project:

    yarn global add eslint-config-tdmalone

Install locally to one project:

    yarn add --dev eslint-config-tdmalone

You'll also need to have [ESLint](https://eslint.org/) installed in the same manner.

## Usage

Add this to your `.eslintrc.js` file:

    module.exports = {
      'extends': [
        'tdmalone'
      ]
    };

Then:
* Using globally?  
  Run `eslint "**/*.js"`.

* Using locally?  
  Add `"lint:js": "eslint \"**/*.js\""` to your `package.json`'s `"scripts"` section, then run `yarn lint:js`

### Additional Tips

* Outputting code coverage reports with Jest? Add `--ignore-pattern coverage/` to your `eslint` command.
* Want ESLint to list the filenames it is linting, even if everything passes? Add [cross-env](https://yarnpkg.com/en/package/cross-env) as a dev dependency and then add `cross-env DEBUG=eslint:cli-engine ` _before_ your `eslint` command.

## See also

* [eslint-config-chromatix](https://github.com/ChromatixAU/eslint-config-chromatix)

## License

[MIT](LICENSE).
