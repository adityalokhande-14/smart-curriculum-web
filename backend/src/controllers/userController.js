const db = require('../firebase/firebaseConfig');

exports.register = async (req, res) => {
  const { email, password, name, collegeCode, role } = req.body;
  try {
    // College code verification logic here
    const userRef = db.collection('users').doc(email);
    await userRef.set({ email, name, collegeCode, role });
    return res.status(201).json({ message: "User registered!", success: true });
  } catch (e) {
    return res.status(500).json({ message: e.message, success: false });
  }
};

exports.login = async (req, res) => {
  const { email } = req.body;
  try {
    const userDoc = await db.collection('users').doc(email).get();
    if (!userDoc.exists) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ user: userDoc.data(), success: true });
  } catch (e) {
    return res.status(500).json({ message: e.message, success: false });
  }
};