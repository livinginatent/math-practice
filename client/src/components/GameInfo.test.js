import { Provider,  } from "react-redux";
import GameInfo from "./GameInfo";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";

describe("GameInfo component", () => {
  const initialState = {
    game: {
      points: 0,
      lives: 3,
      seconds: 20,
      isStarted: false,
      isFinished: false,
    },
  };

  const mockStore = configureMockStore();
  const store = mockStore(initialState);
  const { component } = renderer.create(
    <Provider store={store}>
      <GameInfo />
    </Provider>
  );

  test("Matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
