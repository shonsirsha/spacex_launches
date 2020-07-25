const admin = require("firebase-admin");
const serviceAccount = require("./service-acc-key.json");
const { auth } = require("firebase");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pig-test-50b88.firebaseio.com",
});
const adminAuth = admin.auth();
exports.handler = async (event, context, callback) => {
  try {
    await adminAuth.updateUser("fE8ff7rKnfUshkoLT88sbL4NjBK2", {
      emailVerified: true,
    });
    admin.app().delete();
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        data: `Successfully updated user `,
      }),
    });
  } catch (e) {
    admin.app().delete();
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        data: `ERROR: ${e}`,
      }),
    });
  }

  // admin
  //   .auth()
  //   .updateUser("fE8ff7rKnfUshkoLT88sbL4NjBK2", {
  //     emailVerified: true,
  //   })
  //   .then(function (userRecord) {
  //     // See the UserRecord reference doc for the contents of userRecord.
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify({
  //         data: `Successfully updated user `,
  //       }),
  //     });
  //   })
  //   .catch(function (error) {
  //     callback(null, {
  //       statusCode: 500,
  //       body: JSON.stringify({
  //         data: `ERROR: ${error}`,
  //       }),
  //     });
  //   });
};
