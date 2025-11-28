// Amazon-Style Checkout Logic
const API_BASE = '/api';

(function() {
  let cart = { items: [], total: 0 };
  let address = null;
  let paymentMethod = null;
  let upiApp = null;
  let discount = 0;

  // --- GLOBAL ENTRY POINT ---
  window.openCheckout = async function(items, total) {
    // Ensure HTML is loaded
    if (!document.getElementById('checkout-overlay')) {
      await loadCheckoutTemplate();
    }
    
    // Fallback data fetch if not provided
    if (!items || items.length === 0) {
      try {
        const res = await fetch(`${API_BASE}/cart`);
        const data = await res.json();
        cart = { items: data.items, total: data.total };
      } catch(e) { console.error('Cart fetch error'); }
    } else {
      cart = { items, total };
    }

    // Initialize UI
    resetState();
    renderOrderSummary();
    
    const overlay = document.getElementById('checkout-overlay');
    overlay.classList.remove('checkout-hidden');
    document.body.style.overflow = 'hidden';
  };

  async function loadCheckoutTemplate() {
    try {
      const res = await fetch('/checkout/checkout.html');
      const text = await res.text();
      const div = document.createElement('div');
      div.innerHTML = text;
      document.body.appendChild(div.firstElementChild);
      initListeners();
    } catch(e) { console.error('Template load error'); }
  }

  function initListeners() {
    document.getElementById('close-checkout').onclick = closeCheckout;
    
    // Address Step
    document.getElementById('btn-use-address').onclick = handleAddressSubmit;
    document.getElementById('change-address-btn').onclick = editAddress;
    
    // Inputs Validation Real-time
    const fields = ['cx-name', 'cx-phone', 'cx-pincode', 'cx-house', 'cx-area', 'cx-city', 'cx-district', 'cx-state'];
    fields.forEach(id => {
       const el = document.getElementById(id);
       if(el) {
         el.oninput = () => validateField(el);
         el.onblur = () => validateField(el);
       }
    });

    // Payment Selection
    const radios = document.getElementsByName('payment');
    radios.forEach(r => {
      r.onchange = (e) => {
        paymentMethod = e.target.value;
        // Toggle UPI options
        const upiBox = document.getElementById('upi-options');
        if (paymentMethod === 'upi') {
          upiBox.classList.remove('hidden');
        } else {
          upiBox.classList.add('hidden');
          upiApp = null;
          document.querySelectorAll('.upi-chip').forEach(c => c.classList.remove('active'));
        }
        // Enable continue button if valid
        checkPaymentValidity();
      };
    });

    // UPI Chips
    document.querySelectorAll('.upi-chip').forEach(btn => {
      btn.onclick = (e) => {
        document.querySelectorAll('.upi-chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        upiApp = e.target.dataset.app;
        checkPaymentValidity();
      }
    });

    document.getElementById('btn-continue-payment').onclick = () => {
      // Move to confirm state visually (enable place order)
      // For this flow, we just consider Step 3 done and enable Place Order btn
      document.getElementById('place-order-btn').disabled = false;
      // Also scroll to summary or highlight it
      document.getElementById('place-order-btn').scrollIntoView({ behavior: 'smooth' });
    };

    // Coupon
    document.getElementById('apply-coupon-btn').onclick = applyCoupon;

    // Place Order
    document.getElementById('place-order-btn').onclick = placeOrder;
  }

  function closeCheckout() {
    document.getElementById('checkout-overlay').classList.add('checkout-hidden');
    document.body.style.overflow = '';
  }

  function resetState() {
    // Reset Steps
    document.getElementById('step-1').classList.add('active');
    document.getElementById('address-content').classList.remove('hidden');
    document.getElementById('address-summary').classList.add('hidden');
    document.getElementById('change-address-btn').classList.add('hidden');
    
    document.getElementById('step-2').classList.add('disabled');
    document.getElementById('step-3').classList.add('disabled');
    
    // Reset Form
    document.getElementById('address-form').reset();
    document.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));
    
    // Reset Payment
    document.querySelectorAll('input[name="payment"]').forEach(el => el.checked = false);
    document.getElementById('upi-options').classList.add('hidden');
    document.querySelectorAll('.upi-chip').forEach(c => c.classList.remove('active'));
    document.getElementById('btn-continue-payment').disabled = true;
    
    // Reset Order
    document.getElementById('place-order-btn').disabled = true;
    document.getElementById('processing-screen').classList.add('hidden');
    document.getElementById('success-screen').classList.add('hidden');
    
    address = null;
    paymentMethod = null;
    upiApp = null;
    discount = 0;
  }

  // --- VALIDATION & ADDRESS ---

  function validateField(input) {
    const id = input.id;
    let isValid = input.value.trim().length > 0;
    
    if (id === 'cx-phone') {
      input.value = input.value.replace(/\D/g, '');
      isValid = input.value.length === 10;
    }
    if (id === 'cx-pincode') {
      input.value = input.value.replace(/\D/g, '');
      isValid = input.value.length === 6;
    }

    const parent = input.closest('.form-group');
    if (!isValid && input.value.length > 0) {
      parent.classList.add('has-error');
    } else {
      parent.classList.remove('has-error');
    }
    return isValid;
  }

  function handleAddressSubmit() {
    // Validate All
    const inputs = document.querySelectorAll('#address-form input, #address-form select');
    let allValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        input.closest('.form-group').classList.add('has-error');
        allValid = false;
      }
    });

    if (!allValid) return;

    // Collect Data
    address = {
      name: document.getElementById('cx-name').value,
      phone: document.getElementById('cx-phone').value,
      pincode: document.getElementById('cx-pincode').value,
      house: document.getElementById('cx-house').value,
      area: document.getElementById('cx-area').value,
      city: document.getElementById('cx-city').value,
      district: document.getElementById('cx-district').value,
      state: document.getElementById('cx-state').value
    };

    // Transition UI
    document.getElementById('address-content').classList.add('hidden');
    const summary = document.getElementById('address-summary');
    summary.innerHTML = `<strong>${address.name}</strong><br>${address.house}, ${address.area}<br>${address.city}, ${address.state} ${address.pincode}<br>Phone: ${address.phone}`;
    summary.classList.remove('hidden');
    document.getElementById('change-address-btn').classList.remove('hidden');
    
    // Unlock Next Steps
    document.getElementById('step-2').classList.remove('disabled');
    document.getElementById('step-3').classList.remove('disabled');
    
    // Auto-scroll to payment
    document.getElementById('step-3').scrollIntoView({ behavior: 'smooth' });
  }

  function editAddress() {
    document.getElementById('address-content').classList.remove('hidden');
    document.getElementById('address-summary').classList.add('hidden');
    document.getElementById('change-address-btn').classList.add('hidden');
    
    document.getElementById('step-2').classList.add('disabled');
    document.getElementById('step-3').classList.add('disabled');
    
    document.getElementById('place-order-btn').disabled = true;
  }

  // --- PAYMENT ---
  function checkPaymentValidity() {
    let valid = false;
    if (paymentMethod === 'upi') valid = !!upiApp;
    else if (paymentMethod) valid = true;
    
    document.getElementById('btn-continue-payment').disabled = !valid;
  }

  // --- SUMMARY ---
  function renderOrderSummary() {
    const list = document.getElementById('items-preview');
    list.innerHTML = '';
    
    cart.items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'preview-item';
      el.innerHTML = `
        <span class="preview-title">${item.title} (x${item.quantity})</span>
        <span class="preview-price">₹${item.price * item.quantity}</span>
      `;
      list.appendChild(el);
    });

    document.getElementById('summary-items-price').innerText = `₹${cart.total}`;
    updateGrandTotal();
  }

  async function applyCoupon() {
    const code = document.getElementById('coupon-input').value.trim();
    const msg = document.getElementById('coupon-feedback');
    
    if (!code) return;

    try {
      const res = await fetch(`${API_BASE}/coupons/apply`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ code })
      });
      const data = await res.json();
      
      if (data.ok) {
        discount = data.discount;
        msg.innerText = `Coupon Applied! Saved ₹${discount}`;
        msg.style.color = 'var(--success-green)';
        document.getElementById('savings-row').classList.remove('hidden');
        document.getElementById('summary-savings').innerText = `-₹${discount}`;
      } else {
        discount = 0;
        msg.innerText = data.message || "Invalid Code";
        msg.style.color = 'var(--error-red)';
        document.getElementById('savings-row').classList.add('hidden');
      }
      updateGrandTotal();
    } catch (e) { console.error(e); }
  }

  function updateGrandTotal() {
    const grand = Math.max(0, cart.total - discount);
    document.getElementById('summary-total').innerText = `₹${grand}`;
  }

  // --- PLACE ORDER ---
  async function placeOrder() {
    document.getElementById('processing-screen').classList.remove('hidden');
    
    const payload = {
      items: cart.items,
      address,
      paymentMethod,
      upiApp,
      total: Math.max(0, cart.total - discount)
    };

    try {
      const res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      // Simulate Delay
      setTimeout(() => {
        document.getElementById('processing-screen').classList.add('hidden');
        
        // Handle Payment Gateways here (Simulation)
        if (data.paymentRequired && data.paymentProvider === 'razorpay') {
          if(confirm("[DEMO] Proceed to Razorpay Payment?")) {
            showSuccess(data.orderId);
          }
        } else if (data.upiDeepLink) {
           if(confirm(`[DEMO] Open UPI App (${upiApp})?`)) {
             showSuccess(data.orderId);
           }
        } else {
          // COD or Direct Success
          showSuccess(data.orderId);
        }
      }, 1500);

    } catch(e) {
      alert("Order Failed. Try again.");
      document.getElementById('processing-screen').classList.add('hidden');
    }
  }

  function showSuccess(id) {
    document.getElementById('success-screen').classList.remove('hidden');
    document.getElementById('final-order-id').innerText = id;
    // Clear Cart in background app (optional hook)
  }

})();