import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Action Types

const SET_SIDEBAR_VISIBLE = 'SET_SIDEBAR_VISIBLE';

// Action Creators

function setSidebarVisible(visible) {
  return { type: SET_SIDEBAR_VISIBLE, visible };
}

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SIDEBAR_VISIBLE:
      return {
        ...state,
        sidebarVisible: action.visible,
      };
    default:
      return state;
  }
};

const initialState = {
  sidebarVisible: false,
};

const actionCreators = {
  setSidebarVisible,
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

export { actionCreators };

export default createStore;
