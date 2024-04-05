const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'travel';

// Collection Name
const collectionName = 'account';

// Function to check login credentials
async function login(address, password) {
    try {
        // Connect to the MongoDB server
        const client = await MongoClient.connect(url);
        console.log('Connected successfully to server');

        // Get the database
        const db = client.db(dbName);

        // Get the collection
        const collection = db.collection(collectionName);

        // Find the user with the given address and password
        const user = await collection.findOne({ address, password });

        // Close the connection
        client.close();

        // Check if user exists
        if (user) {
            console.log('Login successful');
            // Redirect to home.js
            window.location.href = '/home.js';
        } else {
            console.log('Login failed');
        }
    } catch (err) {
        console.log(err);
    }
}

// Extract query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const address = urlParams.get('address');
const password = urlParams.get('password');

// Usage example
login(address, password);

export default loginfunction;