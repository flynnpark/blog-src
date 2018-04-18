import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Action Types

const SET_TAG_CARD_VISIBLE = 'SET_TAG_CARD_VISIBLE';

// Action Creators

function setTagCardVisible(visible) {
  return { type: SET_TAG_CARD_VISIBLE, visible };
}

// Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TAG_CARD_VISIBLE:
      return {
        ...state,
        tagCardVisible: action.visible,
      };
    default:
      return state;
  }
};

const initialState = {
  profileCardVisible: true,
  tagCardVisible: true,
};

const createStore = () => {
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
};

export default createStore;
