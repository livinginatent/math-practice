import renderer from 'react-test-renderer';
import Beginning from './Beginning';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { act, render, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing ‘Beginning’ component', () => {
  const initialState = {
    points: 0,
    lives: 3,
    seconds: 20,
    
    isStarted: false,
    isFinished: false,
  };

  const mockStore = configureMockStore();
  const store = mockStore(initialState);
  const { component } = renderer.create(
    <Provider store={store}>
      <Beginning />
    </Provider>
  );

  test('Matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  test('‘GET READY’ message renders', () => {
    render(
      <Provider store={store}>
        <Beginning />
      </Provider>
    );
    const message = screen.getByText(/GET READY.../i);
    expect(message.innerHTML).toBe('GET READY...');
  });

  test("The numbers should be counting down and display `GO`", async () => {
    jest.useFakeTimers();
    render(
      <Provider store={store}>
        <Beginning />
      </Provider>
    );

    const countingDown = screen.getByText("3");
    const message = screen.getByTestId("go-message");

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    await waitFor(() => {
      expect(Number(countingDown.innerHTML)).toBe(2);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    await waitFor(() => {
      expect(Number(countingDown.innerHTML)).toBe(1);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    await waitFor(() => {
      expect(message.innerHTML).toBe("GO");
    });
  });

  test('should dispatch with start()', async () => {
    render(
      <Provider store={store}>
        <Beginning />
      </Provider>
    );

    act(()=>{
      jest.advanceTimersByTime(1000);
      expect(store.getActions()).toEqual([{ type: 'game/start' }]);

    })
  });

  jest.useRealTimers();
});