/**
 * Main configuration for ESLint shareable configuration eslint-config-tdmalone.
 * Originally descended from https://github.com/ChromatixAU/eslint-config-chromatix/.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 * @author Tim Malone <tdmalone@gmail.com>
 */

'use strict';

const INDENTATION_SPACES = 2;

module.exports = {

  env: {
    browser: true,
    es6: true, // @see https://github.com/eslint/eslint/issues/9812#issuecomment-355772014
    jest: true,
    jquery: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 9 // Aka ES2018. @see https://node.green/#ES2018
  },

  // @see https://www.npmjs.com/package/eslint-plugin-jest
  // @see https://github.com/WordPress-Coding-Standards/eslint-config-wordpress/blob/master/index.js
  // @see https://github.com/WordPress-Coding-Standards/eslint-plugin-wordpress/tree/master/lib
  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'wordpress'
  ],

  plugins: [
    'dollar-sign',
    'jest'
  ],

  rules: {

    // Included rules cover purposes such as:
    //
    // - best practices (and quality code)
    // - documentation
    // - indentation
    // - Node safety
    // - purely helpful
    // - security
    // - stylistic
    // - UX
    // - variables
    //
    // Many rules are labelled as to the 'category' they fit into.

    'array-bracket-newline': [ 'error', 'consistent' ], // Stylistic.
    'array-callback-return': [ 'warn' ], // Purely helpful.
    'array-element-newline': [ 'error', 'consistent' ], // Stylistic.
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [ 'error' ],
    'callback-return': [ 'error' ], // Node safety.

    // Documentation.
    'capitalized-comments': [ 'warn', 'always', { ignoreConsecutiveComments: true } ],

    'complexity': [ 'error', { max: 20 } ], // Best practices.

    // Allow non-curly block statements if they remain on a single line.
    curly: [ 'error', 'multi-line' ],

    //@see https://yarnpkg.com/en/package/eslint-plugin-dollar-sign
    'dollar-sign/dollar-sign': [ 'error', 'ignoreProperties' ],

    'dot-location': [ 'error', 'property' ], // Stylistic.
    'eqeqeq': [ 'error', 'always' ], // Best practices.
    'guard-for-in': [ 'error' ], // Best practices.
    'handle-callback-err': [ 'error' ], // Node safety.

    // Variables.
    'id-length': [
      'error', {
        max: 30,
        min: 2
      }
    ],

    // Indentation.
    // @see https://eslint.org/docs/rules/indent
    'indent': [
      'error',
      INDENTATION_SPACES,
      {
        flatTernaryExpressions: true,
        SwitchCase: 1,
        VariableDeclarator: {
          const: 3,
          let: 2,
          var: 2
        }
      }
    ],

    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],

    'linebreak-style': [ 'off' ], // Handled by git.

    // Documentation.
    'lines-around-comment': [
      'warn',
      {
        beforeBlockComment: true,
        beforeLineComment: true
      }
    ],

    'max-depth': [ 'error', { max: 3 } ], // Best practices.

    // Stylistic.
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        tabWidth: 2
      }
    ],

    // Stylistic.
    'max-lines': [
      'error',
      {
        max: 800,
        skipBlankLines: false,
        skipComments: false
      }
    ],

    'max-nested-callbacks': [ 'error', { max: 3 } ], // Best practices.
    'max-params': [ 'error', { max: 4 } ], // Best practices.
    'max-statements': [ 'error', { max: 15 } ], // Best practices.
    'max-statements-per-line': [ 'error' ], // Stylistic.
    'no-alert': [ 'error' ], // UX.
    'no-array-constructor': [ 'error' ], // Stylistic.
    'no-buffer-constructor': [ 'error' ], // Node safety.
    'no-console': [ 'off' ], // Handled by strip-debug during minify for prod.
    'no-empty-function': [ 'error' ], // Stylistic.
    'no-eq-null': [ 'error' ], // Best practices.
    'no-eval': [ 'error' ], // Security.
    'no-implicit-coercion': [ 'error' ], // Best practices.
    'no-implied-eval': [ 'error' ], // Security.
    'no-lone-blocks': [ 'error' ], // Stylistic.
    'no-lonely-if': [ 'error' ], // Stylistic.
    'no-loop-func': [ 'error' ], // Best practices.

    'no-magic-numbers': [
      'error',
      {
        ignore: [ -1, 0, 1 ],
        ignoreArrayIndexes: true,
        enforceConst: true
      }
    ],

    'no-mixed-requires': [ 'error', { allowCall: true } ], // Node safety.
    'no-multi-spaces': [ 'error' ], // Stylistic.
    'no-multi-str': [ 'off' ],

    // Stylistic.
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 1,
        maxEOF: 1
      }
    ],

    'no-negated-condition': [ 'error' ], // Stylistic.
    'no-new-object': [ 'error' ], // Stylistic.
    'no-param-reassign': [ 'error' ], // Best practices.
    'no-path-concat': [ 'error' ], // Node safety.
    'no-plusplus': [ 'off' ], // Only should be on if not using semicolons
    'no-process-env': [ 'error' ], // Node safety.
    'no-process-exit': [ 'error' ], // Node safety.
    'no-return-assign': [ 'error' ], // Best practices.
    'no-self-compare': [ 'error' ], // Best practices.
    'no-tabs': [ 'error' ], // Stylistic.
    'no-unused-expressions': [ 'error' ], // Best practices.

    // Allow function declarations to be used before being defined, because they're always hoisted.
    // Doesn't apply to function *expressions* (eg. const something = function() {}).
    'no-use-before-define': [ 'error', 'nofunc' ],

    'no-var': [ 'error' ], // Best practices.
    'no-warning-comments': [ 'warn' ], // Documentation.

    'object-curly-newline': [
      'error',
      {
        minProperties: 3,
        multiline: true,
        consistent: true
      }
    ],

    // Consistency with array-bracket-spacing in eslint-config-wordpress.
    'object-curly-spacing': [ 'error', 'always' ],

    'object-property-newline': [ 'error' ], // Stylistic.
    'object-shorthand': [ 'warn' ],
    'prefer-const': [ 'error' ], // Best practices.

    // Require js-doc everywhere, not just in function declarations.
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true
        }
      }
    ],

    'strict': [ 'error', 'safe' ], // Best practices.
    'valid-jsdoc': [ 'warn' ] // Documentation.

  } // Rules.
}; // Module.exports
