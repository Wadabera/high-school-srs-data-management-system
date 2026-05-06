const mongoose = require('mongoose');

async function check() {
  await mongoose.connect('mongodb://localhost:27017/srs');
  const db = mongoose.connection.db;
  const users = await db.collection('users').find({}).toArray();
  console.log('All Users:', JSON.stringify(users, null, 2));
  process.exit();
}

check();
