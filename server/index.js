import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

dotenv.config({ path: ".env.local" });

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WORK NEST SERVER IS RUNNING");
});

// Mongo URI With ENV
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@pranoy.ycackxv.mongodb.net/?retryWrites=true&w=majority&appName=Pranoy`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    client.connect();
    const db = client.db("work_nest");

    // USERS FROM SERVER
    const userCollections = db.collection("users");

    app.get("/users", async (req, res) => {
      const result = await userCollections.find({}).toArray();
      res.send(result);
    });

    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await userCollections.findOne({ email });
      res.send(result);
    });

    app.post("/add-user", async (req, res) => {
      const user = req.body;
      const result = await userCollections.insertOne(user);
      res.send(result);
    });

    app.put("/update-user/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = { $set: user };
      const result = await userCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // ALL TASKS METHOD
    const taskCollections = db.collection("tasks");

    app.post("/add-task", async (req, res) => {
      const task = req.body;
      const result = await taskCollections.insertOne(task);
      res.send(result);
    });

    app.get("/tasks", async (req, res) => {
      const result = await taskCollections.find({}).toArray();
      res.send(result);
    });

    app.get("/task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await taskCollections.findOne(query);
        res.send(result);
      } catch (err) {
        res.status(400).send({ error: "Invalid ID format" });
      }
    });

    app.get("/my-task/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const query = { "profile.email": email };
        const result = await taskCollections.find(query).toArray();
        res.send(result);
      } catch (err) {
        res.status(400).send({ error: "Invalid request format" });
      }
    });

    app.delete("/delete-task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await taskCollections.deleteOne(query);
        res.send(result);
      } catch (err) {
        res.status(400).send({ error: "Invalid ID format" });
      }
    });

    app.put("/update-task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const task = req.body;
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = { $set: task };
        const result = await taskCollections.updateOne(
          query,
          updateDoc,
          options
        );
        res.send(result);
      } catch (err) {
        res.status(400).send({ error: "Invalid ID format" });
      }
    });

    app.patch("/bid-task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const task = req.body;
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = { $set: task };
        const result = await taskCollections.updateOne(
          query,
          updateDoc,
          options
        );
        res.send(result);
      } catch (err) {
        res.status(400).send({ error: "Invalid ID format" });
      }
    });
  } catch (err) {
    console.error("Connection failed", err);
  }
}

run().catch(console.error);

// Start server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
