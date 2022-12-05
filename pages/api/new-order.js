import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/orders?retryWrites=true&w=majority"
    );
    const db = client.db();

    const ordersCollection = db.collection("orders");

    const result = await ordersCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Order checked!" });
  }
}

export default handler;
