import React, { useEffect } from "react";
// import mongo from "mongodb";
const mongo = require("mongodb");

const MongoComponent = () => {
  const DB = "gigo";
  const COLLECTION = "locations";
  const MongoClient = mongo.MongoClient;
  const url =
    "mongodb+srv://gigoAdmin:gigo1234@gigo.azdaq.mongodb.net/gigo?retryWrites=true&w=majority";

  useEffect(() => {
    console.log("mounting");
    const mongoResponse = await fetch('http://localhost:3000/')
    });
  }, []);

  return <div>MongoTesting</div>;
};

export default MongoComponent;
