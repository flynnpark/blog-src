import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Action Types

const SET_DROPDOWN_MENU = 'SET_DROPDOWN_MENU';

// Action Creators

function setDropdownVisible(visible) {
  return { type: SET_DROPDOWN_MENU, visible };
}

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DROPDOWN_MENU:
      return {
        ...state,
        dropdownVisible: action.visible,
      };
    default:
      return state;
  }
};

const initialState = {
  dropdownVisible: false,
};

const actionCreators = {
  setDropdownVisible,
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

export { actionCreators };

export default createStore;
