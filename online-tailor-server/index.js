const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://living_needs:ExUETNeWw2P8fvGV@cluster0.oyfvck0.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    // console.log("database connect");
    const tailorCollection = client.db('onlineTailors').collection('tailors');
    const userCollection = client.db('onlineTailors').collection('user');
    const productCollection = client.db('onlineTailors').collection('products');
    const bookingCollection = client
      .db('onlineTailors')
      .collection('bookingProducts');
    const bookingTailorCollection = client
      .db('onlineTailors')
      .collection('bookingTailors');
    const contactCollection = client.db('onlineTailors').collection('contact');
    const reviewCollection = client.db('onlineTailors').collection('reviews');

    //   // // // // // // // // // // // //
    //create and update a user
    app.put('/create-user/:email', async (req, res) => {
      const email = req.params.email;
      const user = req.body;

      const filter = { email: email };
      const options = { upsert: true };

      const updatedDoc = {
        $set: user,
      };

      const result = await userCollection.updateOne(
        filter,
        updatedDoc,
        options
      );

      res.send(result);
    });
    // // post User
    app.post('/user', async (req, res) => {
      const newProduct = req.body;
      const result = await userCollection.insertOne(newProduct);
      res.send(result);
    });
    // get User
    app.get('/users', async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const mainProducts = await cursor.toArray();
      res.send(mainProducts);
    });
    // get user by email
    app.get('/user/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = userCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });

    //                    Jobs
    // get Jobs
    app.get('/tailors', async (req, res) => {
      const query = {};
      const cursor = tailorCollection.find(query);
      const jobs = await cursor.toArray();
      res.send(jobs);
    });
    // post Jobs
    app.post('/tailors', async (req, res) => {
      const newProduct = req.body;
      const result = await tailorCollection.insertOne(newProduct);
      res.send(result);
    });
    // get all tailor by id
    app.get('/tailor/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await tailorCollection.findOne(query);
      res.send(result);
    });
    // delete Tailors
    app.delete('/tailors/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await tailorCollection.deleteOne(query);
      res.send(result);
    });

    // post  book tailor
    app.post('/bookTailors', async (req, res) => {
      const newProduct = req.body;
      const result = await bookingTailorCollection.insertOne(newProduct);
      res.send(result);
    });
    // // get Book Products
    app.get('/bookTailors', async (req, res) => {
      const query = {};
      const cursor = bookingTailorCollection.find(query);
      const mainProducts = await cursor.toArray();
      res.send(mainProducts);
    });
    app.get('/bookTailors/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = bookingTailorCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });
 

    // //                        ALl products
    // All Services Collection
    app.post('/products', async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    });

    // get all services
    app.get('/products', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    // all service filter by service category
    app.get('/products/:service', async (req, res) => {
      const service = req.params.service;
      const query = { service };
      const cursor = productCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });
    // get all services by id
    app.get('/productsId/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const products = await productCollection.findOne(query);
      res.send(products);
    });
    // // Delete one Service
    app.delete('/product/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });
    // post  book services
    app.post('/bookProducts', async (req, res) => {
      const newProduct = req.body;
      const result = await bookingCollection.insertOne(newProduct);
      res.send(result);
    });
    // // get Book Products
    app.get('/bookProducts', async (req, res) => {
      const query = {};
      const cursor = bookingCollection.find(query);
      const mainProducts = await cursor.toArray();
      res.send(mainProducts);
    });
    app.get('/allBooking/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = bookingCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });
    // // Delete one Service
  
    app.delete('/bookServiceDelete/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    });


    // post  contact
    app.post('/contact', async (req, res) => {
      const newProduct = req.body;
      const result = await contactCollection.insertOne(newProduct);
      res.send(result);
    });
    // // get contact
    app.get('/contact', async (req, res) => {
      const query = {};
      const cursor = contactCollection.find(query);
      const mainProducts = await cursor.toArray();
      res.send(mainProducts);
    });
    // // Delete one Service
    app.delete('/contact/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await contactCollection.deleteOne(query);
      res.send(result);
    });
    // post  review
    app.post('/review', async (req, res) => {
      const newProduct = req.body;
      const result = await reviewCollection.insertOne(newProduct);
      res.send(result);
    });
    // // get review
    app.get('/reviews', async (req, res) => {
      const query = {};
      const cursor = reviewCollection.find(query);
      const mainProducts = await cursor.toArray();
      res.send(mainProducts);
    });
    app.get('/review/:email', async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const cursor = reviewCollection.find(query);
      const user = await cursor.toArray();
      res.send(user);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Running Online Tailor');
});

app.listen(port, () => {
  console.log('Online Tailor server is running ');
});
