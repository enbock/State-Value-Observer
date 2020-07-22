import ListenerAdapter from './ListenerAdapter';
import {OnChangeCallback} from './ValueObserver';

describe(ListenerAdapter, () => {
  it('registers and call on change', (done) => {
    const callback: OnChangeCallback<string> = jest.fn();
    const adapter: ListenerAdapter<string> = new ListenerAdapter<string>();

    adapter.addListener(callback);
    adapter.onChange('new');
    setTimeout(() => {
      expect(callback).toHaveBeenCalledWith('new');
      done();
    }, 1);
  });

  it('registers and call on change synchronous', function (): void {
    const callback: OnChangeCallback<string> = jest.fn();
    const adapter: ListenerAdapter<string> = new ListenerAdapter<string>(false);

    adapter.addListener(callback);
    adapter.onChange('new');
    expect(callback).toHaveBeenCalledWith('new');
  });

  it('removes listener', () => {
    const callback: OnChangeCallback<string> = jest.fn();
    const adapter: ListenerAdapter<string> = new ListenerAdapter<string>();
    adapter.addListener(callback);

    adapter.removeListener(callback);
    adapter.onChange('counted');
    expect(callback).not.toHaveBeenCalled();
  });
});
