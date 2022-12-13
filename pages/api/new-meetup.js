// api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    //MONGODB CODE --- CONNECTIING DB
    const client = await MongoClient.connect(
      "mongodb+srv://meetupguy:3yoql2uvSpYblk1M@cluster0.6qbca.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
};

export default handler;
