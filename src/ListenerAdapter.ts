import {IObserverAdapter, IOnChangeCallback} from './Observer';

export default class ListenerAdapter<T> implements IObserverAdapter<T> {
  protected listeners: IOnChangeCallback<T>[];
  private readonly asyncCallbacks: boolean = true;

  constructor(asyncCallbacks: boolean = true) {
    this.asyncCallbacks = asyncCallbacks;
    this.listeners = [];
  }

  public onChange(newValue: T): void {
    const runAsync: boolean = this.asyncCallbacks;
    function callListener(listener: IOnChangeCallback<T>): void {
      if (runAsync) {
        setTimeout(function handler(): void {
          listener(newValue);
        }, 1);
      } else {
        listener(newValue);
      }
    }

    this.listeners.forEach(callListener);
  }

  public addListener(callback: IOnChangeCallback<T>) {
    this.removeListener(callback);
    this.listeners.push(callback);
  }

  public removeListener(callback: IOnChangeCallback<T>) {
    const index: number = this.listeners.indexOf(callback);
    if (index < 0) return;
    this.listeners.splice(index, 1);
  }
}
