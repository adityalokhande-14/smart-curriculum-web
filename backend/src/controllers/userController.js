const db = require('../firebase/firebaseConfig');

exports.register = async (req, res) => {
  const { email, password, name, collegeCode, role } = req.body;

  if (!email || !password || !name || !collegeCode || !role) {
    return res.status(400).json({ message: "All fields are required", success: false });
  }

  try {
    // Reference to user document
    const userRef = db.collection('users').doc(email);
    const doc = await userRef.get();

    // If user already exists
    if (doc.exists) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    // Save user data
    await userRef.set({
      email,
      password,
      name,
      collegeCode,
      role,
      createdAt: new Date().toISOString()
    });

    console.log(`Registered user: ${email}`);
    return res.status(201).json({ message: "User registered!", success: true });

  } catch (e) {
    console.error("Register Error:", e);
    return res.status(500).json({ message: "Server error, please try again later.", success: false });
  }
};

exports.login = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required", success: false });
  }

  try {
    const userRef = db.collection('users').doc(email);
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    // Send user data without sensitive info (like password) if needed
    const userData = doc.data();
    delete userData.password; // optional

    return res.status(200).json({ user: userData, success: true });

  } catch (e) {
    console.error("Login Error:", e);
    return res.status(500).json({ message: "Server error, please try again later.", success: false });
  }
};
