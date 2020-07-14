import {
  SET_LOADING,
  GET_ALL_LAUNCHES,
  GET_SINGLE_LAUNCH,
  LOADED_ALL
} from "../types";
import React, { useReducer } from "react";
import LaunchesReducer from "../launches/launchesReducer";
import LaunchesContext from "../launches/launchesContext";
import axios from "axios";

const LaunchesState = props => {
  const initialState = {
    launchesArr: [],
    launch: {},
    loadedAll: false,
    loading: false
  };

  const [state, dispatch] = useReducer(LaunchesReducer, initialState);

  const getAllLaunches = async () => {
    setLoading();
    setLoadedAll(true);

    const res = await axios.get(
      "https://api.spacexdata.com/v3/launches?order=desc"
    );

    dispatch({ type: GET_ALL_LAUNCHES, payload: res.data });
  };

  const getSingleLaunch = async flight_num => {
    setLoading();

    const res = await axios.get(
      `https://api.spacexdata.com/v3/launches?flight_number=${flight_num}`
    );

    dispatch({ type: GET_SINGLE_LAUNCH, payload: res.data[0] });
  };

  const getAllLaunchesSearch = async userInput => {
    setLoading();
    setLoadedAll(false);

    const res = await axios.get("https://api.spacexdata.com/v3/launches");
    const filteredArr = res.data.filter(o =>
      Object.keys(o).some(k =>
        String(o[k])
          .toString()
          .toLowerCase()
          .includes(userInput.toLowerCase())
      )
    );

    dispatch({ type: GET_ALL_LAUNCHES, payload: filteredArr });
  };
  const setLoadedAll = status => {
    dispatch({ type: LOADED_ALL, payload: status });
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <LaunchesContext.Provider
      value={{
        launchesArr: state.launchesArr,
        loading: state.loading,
        launch: state.launch,
        loadedAll: state.loadedAll,
        setLoading,
        getAllLaunches,
        getAllLaunchesSearch,
        getSingleLaunch
      }}
    >
      {props.children}
    </LaunchesContext.Provider>
  );
};

export default LaunchesState;
