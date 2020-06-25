import Collection from '.';
import ListenerAdapter from './ListenerAdapter';
import Observer from './Observer';

it("Collect library classes for require usage", function () {
  expect(Collection.Observer).toBe(Observer);
  expect(Collection.ListenerAdapter).toBe(ListenerAdapter);
});
