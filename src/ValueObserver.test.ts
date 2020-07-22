import ValueObserver, {ObserverAdapter, OnChangeCallback} from './ValueObserver';

describe(ValueObserver, () => {
  it('Callback on change', () => {
    const callback: jest.MockedFunction<OnChangeCallback<string>> = jest.fn();
    const adapter: ObserverAdapter<string> = {
      onChange: callback
    };

    const observer: ValueObserver<string> = new ValueObserver<string>('init', adapter);
    expect(observer.value).toEqual('init');

    observer.value = 'new';
    expect(observer.value).toEqual('new');
    expect(callback).toHaveBeenCalledWith('new');
  });
});
