# Checkout & Admin Integration Guide

## 1. Files Added
- `/checkout/checkout.html` - The overlay HTML.
- `/checkout/checkout.css` - Styles for the overlay (Dark theme).
- `/checkout/checkout.js` - Logic for validation, API calls, and flow.
- `/server-stubs/orders-stub.js` - Backend simulation for Node.js.
- `/admin/*` - Admin panel, auth logic, and seed script.

## 2. Testing Locally
1. Ensure your main app is running.
2. Open a new terminal and run the stub server:
   ```bash
   node server-stubs/orders-stub.js
   ```
3. In `checkout/checkout.js` and `admin/admin-panel.html`, ensure `API_BASE` is pointing to the correct backend (or `/api` if using a proxy).
4. Go to Cart -> Click Checkout. The overlay should appear.

## 3. Production Deployment (GoDaddy)
1. **Export**: Use the "Export to ZIP" feature in the editor.
2. **Upload**: Upload the extracted files to your `public_html` folder.
3. **Backend**: 
   - You need a real Node.js backend running to handle `/api/orders`.
   - Update `API_BASE` in `checkout.js` to point to your real domain (e.g., `https://api.yourdomain.com`).
4. **Payments**:
   - In your real backend, replace the placeholder Razorpay/UPI logic with actual SDK calls.
   - **NEVER** put your Razorpay Secret Key in `checkout.js`. Only use the Key ID.

## 4. Admin Setup
1. Run the seed script locally or on your server to generate the admin hash:
   ```bash
   node admin/admin-seed.js
   ```
2. Copy the output hash to your database.
3. Access `/admin/admin-panel.html` in your browser.
4. Login with:
   - User: `decodesriraj11@gmail.com`
   - Pass: `9390095383sriraj`
5. You will be prompted to reset the password immediately.

## 5. Security Note
- The provided client code uses placeholders. Ensure all sensitive logic (payment verification, password hashing) happens on your secure server.
