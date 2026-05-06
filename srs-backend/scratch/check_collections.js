const mongoose = require('mongoose');

async function check() {
  const uri = 'mongodb+srv://wada:099374%40wa@ethiodiasphora.tzlqjeb.mongodb.net/srs?retryWrites=true&w=majority&appName=srs';
  await mongoose.connect(uri);
  const db = mongoose.connection.db;
  
  const user = await db.collection('users').findOne({ username: 'admin' });
  const director = await db.collection('directors').findOne({ username: 'admin' });
  
  console.log('User in users collection:', user ? 'Yes' : 'No');
  console.log('User in directors collection:', director ? 'Yes' : 'No');
  
  process.exit();
}

check();
