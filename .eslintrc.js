// .eslintrc.js
export default {
  extends: "airbnb",
  rules: {
    semi: [2, "never"],
    "no-console": 0,
    "comma-dangle": [2, "always-multiline"],
    "max-len": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-filename-extension": 0,
    "space-before-function-paren": [2, "always"],
    "no-unused-expressions": [
      0,
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "arrow-body-style": [0, "never"],
    "func-names": 0,
    "prefer-const": 0,
    "no-extend-native": 0,
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "no-eval": 0,
    "no-continue": 0,
    "react/jsx-no-bind": 0,
    "no-unused-vars": [2, { ignoreRestSiblings: true }],
    "no-underscore-dangle": 0,
    "global-require": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "jsx-a11y/href-no-hash": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-string-refs": 0,
    "react/no-find-dom-node": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/no-danger": 0,
    "jsx-a11y/no-static-element-interactions": 0,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    "import/resolver": "node",
  },
};
