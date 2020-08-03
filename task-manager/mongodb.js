// CRUD create read update and delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f2826cc4456921d1ca247ee") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5f2823c6ddf6363d88ca2ef5") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log(error);
    //     }

    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log(error);
    //     }

    //     console.log(tasks);
    //   });
  }
);
