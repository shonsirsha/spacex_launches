import {
  SET_LOADING,
  GET_ALL_LAUNCHES,
  GET_SINGLE_LAUNCH,
  LOADED_ALL
} from "../types";
export default (state, action) => {
  switch (action.type) {
    case GET_ALL_LAUNCHES:
      return {
        ...state,
        launchesArr: action.payload,
        loading: false
      };

    case GET_SINGLE_LAUNCH:
      return {
        ...state,
        launch: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOADED_ALL:
      return {
        ...state,
        loadedAll: action.payload
      };

    default:
      return state;
  }
};
