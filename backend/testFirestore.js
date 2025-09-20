const db = require('./src/firebase/firebaseConfig');

async function testFirestore() {
  try {
    const testDocRef = db.collection('users').doc('testUser');
    await testDocRef.set({
      name: "Test User",
      email: "test@example.com",
      createdAt: new Date().toISOString()
    });
    console.log("✅ Firestore write successful");
  } catch (e) {
    console.error("Firestore test failed:", e);
  }
}

testFirestore();
