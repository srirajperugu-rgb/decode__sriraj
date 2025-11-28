const crypto = require('crypto');

// Configuration
const adminUser = {
  email: 'decodesriraj11@gmail.com',
  plainPassword: '9390095383sriraj',
  role: 'admin',
  forcePasswordReset: true
};

// Simple hashing function using Node crypto (PBKDF2)
// In production, use bcrypt (requires native modules)
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
}

console.log("--- SEEDING ADMIN USER ---");
const { salt, hash } = hashPassword(adminUser.plainPassword);

const dbRecord = {
  email: adminUser.email,
  passwordHash: hash,
  passwordSalt: salt,
  role: adminUser.role,
  forcePasswordReset: adminUser.forcePasswordReset,
  createdAt: new Date().toISOString()
};

console.log("Admin user created in memory (Simulated DB Insert):");
console.log(JSON.stringify(dbRecord, null, 2));
console.log("\nINSTRUCTIONS: Insert this record into your MongoDB 'users' collection.");
console.log("After running this seed, login and immediately reset password.");
