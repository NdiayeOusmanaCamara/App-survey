const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'customer_surveys';

let db = null;

async function connectDB() {
    if (db) return db;

    // Supprimer les options obsolètes
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db(dbName);
        return db;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

module.exports = { connectDB };
