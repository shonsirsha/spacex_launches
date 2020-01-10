import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LaunchesContext from "../../context/launches/launchesContext";
import Spinner from "../layouts/Spinner";
import moment from "moment";
import NotFound from "../pages/NotFound";
const Capsule = ({ match }) => {
  const launchesContext = useContext(LaunchesContext);
  const { loading, getSingleLaunch } = launchesContext;

  useEffect(() => {
    getSingleLaunch(match.params.flight_number);
  }, []);

  try {
    const { launch } = launchesContext;

    const {
      mission_name,
      details,
      launch_date_unix,
      launch_success,
      links: { mission_patch_small } = {},
      rocket: { rocket_name } = {},
      launch_site: { site_name_long } = {}
    } = launch;

    return loading ? (
      <Spinner />
    ) : launch !== "undefined" ? (
      <div className='container'>
        <Link to={`/`} className='btn btn-success btn-small'>
          Back
        </Link>
        <div className='card'>
          <div style={{ textAlign: "center" }}>
            {mission_patch_small ? (
              <img
                alt="Mission's Patch"
                src={mission_patch_small}
                style={{ width: "120px", height: "120px" }}
              />
            ) : (
              ""
            )}
            <h1>{mission_name}</h1>
            <h4>Rocket: {rocket_name}</h4>
            {/* rocket -> rocket_name*/}
            <h5>
              Flight Number: <kbd>{match.params.flight_number}</kbd>
              <br />
              Launch Date:{" "}
              {moment.unix(launch_date_unix).format("DD MMMM YYYY")}
            </h5>
            <div
              className={`my-1 badge badge-${
                launch_success != null
                  ? launch_success
                    ? "success"
                    : "danger"
                  : "dark"
              }`}
            >
              {launch_success != null
                ? launch_success
                  ? "Successful Launch"
                  : "Failed Launch"
                : "Upcoming Launch"}
            </div>
          </div>

          <div>
            <div className='card'>
              <h2>Details on the mission:</h2>

              <p className='small' style={{ marginTop: "8px" }}>
                <b>Mission Description: </b>
                {details ? details : <kbd> Not Available...</kbd>}
              </p>
              <p style={{ marginTop: "8px", fontSize: "14px" }}>
                <kbd>
                  <b>Location:</b> {site_name_long}
                </kbd>
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <NotFound />
    );
  } catch (e) {
    return <NotFound />;
  }
};

export default Capsule;
