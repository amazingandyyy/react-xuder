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

### Concepts

1. SSR is good for client's slow CPU
2. add `NODE_PATH` for easier importing path
3. 

### Helpful commands

```command
nodemon --exec babel-node ./lib/server.js
```
