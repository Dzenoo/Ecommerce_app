import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/products?retryWrites=true&w=majority"
    );
    const db = client.db();

    const productsCollection = db.collection("products");

    const result = await productsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Product inserted" });
  }
}

export default handler;
