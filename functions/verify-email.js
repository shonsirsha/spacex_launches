const admin = require("firebase-admin");
const serviceAccount = require("./service-acc-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pig-test-50b88.firebaseio.com",
});
exports.handler = (event, context, callback) => {
  admin
    .auth()
    .updateUser("fE8ff7rKnfUshkoLT88sbL4NjBK2", {
      emailVerified: true,
    })
    .then(function (userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(userRecord.toJSON());
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          data: `Successfully updated user ${userRecord.toJSON()}`,
        }),
      });
    })
    .catch(function (error) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          data: `ERROR: ${error}`,
        }),
      });
    });
};
