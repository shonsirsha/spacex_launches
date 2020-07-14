import React from "react";

const About = () => {
  return (
    <div className='card text-center'>
      <h1>About This App</h1>
      <p>
        <b>App to search all SpaceX's Launches</b>
      </p>
      <p className=''>
        Created by Sean Saoirse (github and instagram: /shonsirsha)
        <br />
        Version: 1.0.0
      </p>

      <p className='mt-3'>
        All data and photos are property of Space Exploration Technologies
        Corporation (SpaceX)
      </p>
      <p>
        <b>
          I am not affiliated with SpaceX in any way, shape, form, or fashion.
        </b>
      </p>
    </div>
  );
};

export default About;
