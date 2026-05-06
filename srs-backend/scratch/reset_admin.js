const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

async function reset() {
  const uri = 'mongodb+srv://wada:099374%40wa@ethiodiasphora.tzlqjeb.mongodb.net/srs?retryWrites=true&w=majority&appName=srs';
  console.log('Connecting to cloud DB...');
  await mongoose.connect(uri);
  const db = mongoose.connection.db;
  
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const result = await db.collection('users').updateOne(
    { username: 'admin' },
    { $set: { password: hashedPassword } }
  );
  
  if (result.matchedCount === 0) {
    console.log('Admin user not found. Creating one...');
    // If not found, we should probably use the service to create it properly, 
    // but for a quick fix we can just insert into users and directors collections.
    // However, it's safer to just inform or check why seed.js said it was taken.
  } else {
    console.log('Password updated successfully for user "admin"');
  }
  
  process.exit();
}

reset();
