const mongoose = require('mongoose');

const uri = "mongodb+srv://wada:099374%40wa@ethiodiasphora.tzlqjeb.mongodb.net/srs?retryWrites=true&w=majority&appName=srs";

async function checkUsers() {
  await mongoose.connect(uri);
  const db = mongoose.connection.db;
  const users = await db.collection('users').find({}).toArray();
  console.log('--- Users in Database ---');
  users.forEach(u => {
    console.log(`Username: ${u.username}, Role: ${u.role}, PasswordHash: ${u.password ? 'Exists' : 'MISSING'}`);
  });
  process.exit();
}

checkUsers();
