import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";

const CapsuleItem = ({
  singleLaunch: { mission_name, launch_date_unix, rocket, flight_number }
}) => {
  const { rocket_name } = rocket;
  return (
    <div className='card'>
      <h2>{mission_name}</h2>
      <p> Rocket: {rocket_name}</p>
      <h4>
        Launch date: {moment.unix(launch_date_unix).format("DD MMMM YYYY")}
      </h4>

      <Link
        to={`/launch/${flight_number}`}
        className='btn btn-dark btn-sm my-1'
      >
        More Information
      </Link>
    </div>
  );
};

CapsuleItem.propTypes = {
  singleLaunch: PropTypes.object.isRequired
};

export default CapsuleItem;
