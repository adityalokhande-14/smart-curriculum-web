const admin = require('firebase-admin');
const serviceAccount = require('../../firebase-serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

console.log(" Firebase initialized successfully");

module.exports = db;
