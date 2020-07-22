import {ObserverAdapter, OnChangeCallback} from './ValueObserver';

export default class ListenerAdapter<Type> implements ObserverAdapter<Type> {
  protected listeners: OnChangeCallback<Type>[];
  private readonly asyncCallbacks: boolean = true;

  constructor(asyncCallbacks: boolean = true) {
    this.asyncCallbacks = asyncCallbacks;
    this.listeners = [];
  }

  public onChange(newValue: Type): void {
    const runAsync: boolean = this.asyncCallbacks;
    function callListener(listener: OnChangeCallback<Type>): void {
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

  public addListener(callback: OnChangeCallback<Type>) {
    this.removeListener(callback);
    this.listeners.push(callback);
  }

  public removeListener(callback: OnChangeCallback<Type>) {
    const index: number = this.listeners.indexOf(callback);
    if (index < 0) return;
    this.listeners.splice(index, 1);
  }
}
