import React, { useContext, useEffect } from "react";
import Search from "../layouts/Search";
import Capsules from "../launches/Capsules";
import app from "../../firebase.js";

const Home = () => {
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user === null) {
        //if user isn't authed
      } else {
        console.log("ASDSA");
        console.log(user.emailVerified);
      }
    });
  }, []);
  const test = async () => {
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(
          "seangeekpro@gmail.com",
          "kucing123123"
        );
      console.log("SUCCESS");
    } catch (error) {
      console.log(error);
    }
  };
  const fafa = () => {};
  return (
    <div>
      <h1>
        <button onClick={fafa}>testest</button>
        <button onClick={test}>asd</button>
        SpaceX Launches (Newest to Oldest){" "}
        {process.env.REACT_APP_NOT_SECRET_CODE}
      </h1>
      <Search />
      <Capsules />
    </div>
  );
};

export default Home;
