
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chengggkk:<password>@cluster0.6msnin5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const {poseidon1} = require("poseidon-lite")

// Database Name
const dbName = 'travel';

// Collection Name
const collectionName = 'account';

async function register(address, password, name, email) {
    const client = await MongoClient.connect(uri);
    console.log('Connected successfully to server');

    await client.connect()

    const db = client.db("travel");
    const myobj = { address: address, password: password, name: "John Doe", email: "john.doe@example.com" };

    await db.collection("account").insertOne(myobj);
    console.log("好了")

}

async function login(address, password) {
    try {
        // Connect to the MongoDB server
        const client = await MongoClient.connect(uri);
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

function stringToBigInt(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += BigInt(str.charCodeAt(i)).toString();
    }
    return BigInt(result);
  }
  

async function poseidonHash(password){
    const hash = await poseidon1([stringToBigInt(password)])
    console.log(hash.toString())
    console.log("好了")
}

// mongo("我的地址", "我的密碼")
poseidonHash(
    "Vickie0123"
)
