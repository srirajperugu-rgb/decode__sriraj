// Admin Auth Middleware & Routes
// In production, use real JWT library (jsonwebtoken) and bcrypt
const express = require('express');
const router = express.Router();

const ADMIN_CREDENTIALS = {
  email: 'decodesriraj11@gmail.com',
  // In real app, store HASH only. This is for stub demo.
  password: '9390095383sriraj' 
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    // Generate Mock Token
    const token = Buffer.from(JSON.stringify({ role: 'admin', user: username })).toString('base64');
    res.json({ 
      token, 
      needsReset: true, // As per requirements
      message: 'Login successful' 
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.post('/admin/reset-password', (req, res) => {
  // Mock Password Reset
  const { token, newPassword } = req.body;
  if (!token) return res.status(403).json({ error: 'Unauthorized' });
  
  console.log('Password reset requested for admin.');
  // Here update DB
  res.json({ success: true, message: 'Password updated' });
});

router.get('/admin/orders', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token provided' });
  
  // Return stub orders
  res.json([
    { id: 'ORD-123456', date: '2023-10-25', total: 1299, status: 'Confirmed' },
    { id: 'ORD-789012', date: '2023-10-24', total: 599, status: 'Shipped' }
  ]);
});

module.exports = router;
