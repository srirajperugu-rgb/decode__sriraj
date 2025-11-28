const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Enable CORS for local testing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Mock Database
let orders = [];

// GET /api/cart - Demo response
app.get('/api/cart', (req, res) => {
  res.json({
    items: [
      { id: '1', title: 'Python Coding Book', price: 599, quantity: 1 },
      { id: '2', title: 'Advanced Java', price: 899, quantity: 1 }
    ],
    total: 1498
  });
});

// POST /api/coupons/apply
app.post('/api/coupons/apply', (req, res) => {
  const { code } = req.body;
  if (code && code.toUpperCase() === 'DECODE20') {
    res.json({ ok: true, discount: 200, message: 'Coupon Applied' });
  } else {
    res.json({ ok: false, message: 'Invalid Coupon Code' });
  }
});

// POST /api/orders
app.post('/api/orders', (req, res) => {
  const { items, paymentMethod, address, total } = req.body;
  const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

  console.log(`[ORDER] ID: ${orderId}, Method: ${paymentMethod}, Total: ${total}`);

  const orderData = {
    orderId,
    items,
    address,
    paymentMethod,
    total,
    status: 'Placed',
    date: new Date().toISOString()
  };
  orders.push(orderData);

  // Response based on payment method
  if (paymentMethod === 'cod') {
    res.json({ orderId, paymentRequired: false, status: 'Confirmed' });
  } else if (paymentMethod === 'card' || paymentMethod === 'netbanking') {
    res.json({
      orderId,
      paymentRequired: true,
      paymentProvider: 'razorpay',
      amount: total * 100,
      currency: 'INR',
      key_id: 'rzp_test_DEMO_KEY'
    });
  } else if (paymentMethod === 'upi') {
    res.json({
      orderId,
      paymentRequired: true,
      upiDeepLink: `upi://pay?pa=merchant@upi&pn=DecodeSriraj&am=${total}&tr=${orderId}&cu=INR`
    });
  } else {
    res.status(400).json({ error: 'Invalid Payment Method' });
  }
});

// Admin Login Stub
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Demo Check
  if (username === 'decodesriraj11@gmail.com' && password === '9390095383sriraj') {
    res.json({ token: 'demo-jwt-token', needsReset: true });
  } else {
    res.status(401).json({ error: 'Invalid Credentials' });
  }
});

console.log(`Stub Server running on http://localhost:${port}`);
// app.listen(port);
module.exports = app;
