// CRUD create read update and delete

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

    // db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("5f2820b8f2a38817d013c7bd"),
    //   },
    //   {
    //     $inc:{
    //       age:1
    //     }
    //   }
    // ).then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks").updateMany(
      { completed: { $eq: false } },
      { $set: { completed: true } }
    ).then((result) => {
      console.log(result)
    }).catch((e) => {
      console.log(e)
    });
  }
);
