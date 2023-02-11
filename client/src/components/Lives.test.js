import React from "react";
import { render, screen } from "@testing-library/react";
import Lives from "./Lives";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

// FIX THE ESLINT ISSUE
// FIX THE ESLINT ISSUE
// FIX THE ESLINT ISSUE
// FIX THE ESLINT ISSUE

const initialState = {
  game: {
    points: 0,
    lives: 3,
    seconds: 20,
    newGame: false,
    isStarted: false,
    isFinished: false,
  },
};

const mockStore = configureMockStore();
const store = mockStore(initialState);

describe("Lives component", () => {
  test('Matches the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Lives />
      </Provider>
    );
    expect(container).toMatchSnapshot()
  })
  test("renders 3 hearts", () => {
    render(
      <Provider store={store}>
        <Lives />
      </Provider>
    );
   
 const hearts = screen.getByTestId('hearts-state')

  // eslint-disable-next-line testing-library/no-node-access
  expect(hearts.getElementsByTagName('svg')).toHaveLength(3);
  });
});
