export interface IOnChangeCallback<T> {
  (newValue: T): void;
}

export interface IObserverAdapter<T> {
  onChange: IOnChangeCallback<T>
}

export interface IObserver<T> {
  value: T
}

export default class Observer<T> implements IObserver<T> {
  protected adapter: IObserverAdapter<T>;
  protected current: T;

  constructor(initialValue: T, adapter: IObserverAdapter<T>) {
    this.current = initialValue;
    this.adapter = adapter;
  }

  public get value(): T {
    return this.current;
  }

  public set value(newValue: T) {
    this.current = newValue;
    this.adapter.onChange(newValue);
  }
}
