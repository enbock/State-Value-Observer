# State Value Observer
[![Testing](https://github.com/enbock/State-Value-Observer/workflows/Testing/badge.svg)](https://github.com/enbock/State-Value-Observer/actions)
[![Publishing](https://github.com/enbock/State-Value-Observer/workflows/Publishing/badge.svg)](https://github.com/enbock/State-Value-Observer/actions)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/enbock/State-Value-Observer/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/enbock/State-Value-Observer/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/enbock/State-Value-Observer/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/enbock/State-Value-Observer/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/enbock/State-Value-Observer/badges/build.png?b=master)](https://scrutinizer-ci.com/g/enbock/State-Value-Observer/build-status/master)

The State Value Observer is an atomic implementation of the value
observation pattern.

## Feature
* Implemented in dependency injection methodology.
* Provide setter and getter functions of an observed value. 
* Provide interfaces for callbacks and callback adapters.
* Provide an listener adapter.

## Usage
```typescript
const adapter: IObserverAdapter<string> = {
  onChange: function (newValue: string): void {
    console.log('Observed value was changed to:', newValue);
  }
};
const observer: Observer<string> = new Observer<string>('initial value', adapter);

observer.value = 'Hello World!';
```

## Usage of Listener Adapter
```typescript
const adapter: ListenerAdapter<string> = new ListenerAdapter<string>();
const observer: Observer<string> = new Observer<string>('initial value', adapter);

function valueConsumer(newValue: string): void {
  console.log('Observed value was changed to:', newValue);
}

adapter.addListener(valueConsumer.bind(window));

observer.value = 'Hello World!';
```

### Listener Adapter in synchronous mode
```typescript
const adapter: ListenerAdapter<string> = new ListenerAdapter<string>(false);
const observer: Observer<string> = new Observer<string>('initial value', adapter);

function valueConsumer(newValue: string): void {
  console.log('Observed value was changed to:', newValue);
}

adapter.addListener(valueConsumer.bind(window));

observer.value = 'Hello World!';
```

## Testing
### Using this library in your project
This library is providing in [ECMAScript® 2020] language. When you use **jest**,
you get this error by using my library:
```text
  Details:
  
  <YOUR_PATH>\node_modules\@enbock\state-value-observer\ListenerAdapter.js:1
  export default class ListenerAdapter {
  ^^^^^^
  
  SyntaxError: Unexpected token 'export'
      at compileFunction (vm.js:341:18)
```

See more: https://jestjs.io/docs/en/tutorial-react-native#transformignorepatterns-customization
#### Reason and solution
Jest running internally on **ES5**, that does not know the ES6-imports.
##### Force converting ES6+ Libraries
To solve this, you have to *exclude* all my libraries from the *exclusion-list*:
```
"transformIgnorePatterns": [
  "/node_modules/(?!(@enbock)/)"
]
```
##### Let babel "learn" ES6+
`babel.config.js`
```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ]
};
```
See more: https://github.com/facebook/jest#using-typescript
### Run tests
```shell script
yarn test
```

## Building
```shell script
yarn build
```

[ECMAScript® 2020]:https://tc39.es/ecma262/
