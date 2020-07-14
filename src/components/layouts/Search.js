import React, { useState, useContext, Fragment } from "react";
import AlertContext from "../../context/alert/alertContext";
import LaunchesContext from "../../context/launches/launchesContext";

import Alert from "./Alert";

const Search = () => {
  const alertContext = useContext(AlertContext);
  const launchesContext = useContext(LaunchesContext);
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text.length != 0) {
      launchesContext.getAllLaunchesSearch(text);
    } else {
      launchesContext.getAllLaunches();
    }
  };

  const resetSearch = () => {
    setText("");
    launchesContext.getAllLaunches();
  };

  const onChange = e => {
    setText(e.target.value);
  };
  return (
    <Fragment>
      <Alert />
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search launches by mission name, launch year, rocket name, etc...'
          value={text}
          onChange={onChange}
        />
      </form>
      {!launchesContext.loadedAll ? (
        <button onClick={resetSearch} className='btn btn-danger btn-block'>
          Reset results
        </button>
      ) : null}
    </Fragment>
  );
};

export default Search;
