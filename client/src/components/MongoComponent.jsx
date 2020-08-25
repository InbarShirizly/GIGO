import React, { useEffect } from "react";
// import mongo from "mongodb";
const mongo = require("mongodb");

const MongoComponent = () => {
  const url =
    "mongodb+srv://gigoAdmin:gigo1234@gigo.azdaq.mongodb.net/gigo?retryWrites=true&w=majority";

  useEffect(() => {
    console.log("mounting");
    const mongoResponse = fetch("http://localhost:5000/")
      .then((resp) => resp.text())
      .then((rest) => {
        console.log(rest);
      });
  }, []);

  return <div>MongoTesting</div>;
};

export default MongoComponent;
