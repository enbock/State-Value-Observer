export interface OnChangeCallback<Type> {
  (newValue: Type): void;
}

export interface ObserverAdapter<Type> {
  onChange: OnChangeCallback<Type>
}

export interface Observer<Type> {
  value: Type
}

export default class ValueObserver<Type> implements Observer<Type> {
  protected adapter: ObserverAdapter<Type>;
  protected current: Type;

  constructor(initialValue: Type, adapter: ObserverAdapter<Type>) {
    this.current = initialValue;
    this.adapter = adapter;
  }

  public get value(): Type {
    return this.current;
  }

  public set value(newValue: Type) {
    this.current = newValue;
    this.adapter.onChange(newValue);
  }
}
