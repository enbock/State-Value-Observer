# State Value Observer
[![CircleCI](https://circleci.com/gh/enbock/State-Value-Observer/tree/master.svg?style=shield)](https://circleci.com/gh/enbock/State-Value-Observer)
[![.github/workflows/npm-publish.yml](https://github.com/enbock/State-Value-Observer/workflows/.github/workflows/npm-publish.yml/badge.svg)](https://github.com/enbock/State-Value-Observer/actions)
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
const adapter:IObserverAdapter<string> = {
  onChange: function (newValue:string):void {
    console.log("Observed value was changed to:", newValue)
  }
}
const observer = new Observer<string>('initial value', adapter);

observer.value = "Hello World!";
``` 

## Usage of Listener Adapter
```typescript
const adapter:ListenerAdapter<string> = new ListenerAdapter<string>();
const observer = new Observer<string>('initial value', adapter);

function valueConsumer(newValue:string):void {
  console.log("Observed value was changed to:", newValue);
}

adapter.addListener(valueConsumer.bind(window));

observer.value = "Hello World!";
``` 

## Testing
```shell script
yarn test
```

## Building
```shell script
yarn build
```
