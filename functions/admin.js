const admin = require("firebase-admin");
const serviceAccount = require("./service-acc-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pig-test-50b88.firebaseio.com",
});

const db = admin.firestore();

exports.handler = async (event, context, callback) => {
  try {
    await db.collection("testkuc").add({
      name: "FAFAFA",
    });

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: `Test datazzzz added successfully`,
      }),
    });
  } catch (e) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        data: `ERROR: ${e}`,
      }),
    });
  }
};
