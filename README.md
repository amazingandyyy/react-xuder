# React Xuder

React State Controller from scratch.

## Configurations

-1. add eslint and .eslintrc.js

-2. add dependencies for working with es6 and react

```json
  "dependencies": {
    "@babel/core": "^7.2.2",
    "@babel/plugin-proposal-class-properties": "^7.3.0",
    "@babel/preset-env": "^7.3.1",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "babel-polyfill": "^6.26.0",
  }
```

-3. add rules to webpack

```js
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader'}
      ]
  }
```

-4. add `bable-pollyfill` for `async/await` features

## Server-Side Rendering(SSR)

1. fetch data in the server
2. passing data to server generated DOM as a global object
3. DOM use the window.initialData in client side

## Context API

1. getChildContext + PropTypes
2. getChildContext() return value will be the context object

### Concepts

1. SSR is good for client's slow CPU
2. Using absolute importing path
- add `NODE_PATH` in the node
- add `resolve:modules` in webpack

### Helpful commands

```command
nodemon --exec babel-node ./lib/server.js
```
