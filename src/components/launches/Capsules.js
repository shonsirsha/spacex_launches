import React, { useContext, useEffect, Fragment } from "react";
import LaunchesContext from "../../context/launches/launchesContext";
import CapsuleItem from "./CapsuleItem";
import Spinner from "../layouts/Spinner";

const Capsules = () => {
  const launchesContext = useContext(LaunchesContext);
  const { launchesArr, getAllLaunches, loading } = launchesContext;
  useEffect(() => {
    if (launchesArr.length == 0) {
      getAllLaunches();
    }
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className='grid-2'>
      {launchesArr.map(singleLaunch => (
        <CapsuleItem
          key={singleLaunch.flight_number}
          singleLaunch={singleLaunch}
        />
      ))}
    </div>
  );
};

export default Capsules;
