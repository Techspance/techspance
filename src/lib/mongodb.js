// lib/mongodb.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = 
  "mongodb+srv://techspance:kq5VCtbpj8O7uD7O@cluster0.xhzmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//process.env.MONGODB_URI; // Load from environment variable

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  if (!client.isConnected) {
    await client.connect();
  }
  const db = client.db("techspance");
  return db;
}

export default connectToDatabase;
