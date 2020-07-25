const admin = require("firebase-admin");
const serviceAccount = require("./service-acc-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pig-test-50b88.firebaseio.com",
});

const db = admin.firestore();

exports.handler = async (event, context, callback) => {
  await db.collection("testkuc").add({
    name: "Halu",
  });

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `Test data added successfully`,
    }),
  });
};
