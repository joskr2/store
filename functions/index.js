const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51H6qfWKS4AcZSboOoXDx486Zu9MIgloTmnrAFf5uan9T1PN3qb01Ho3Wf7YredWrwH5WP0Q2jJrwxiBbzkMo6nbS0081ONoWAt"
);

//API

//App-config
const app = express();

//middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//  api routes
app.get("/", (request, response) =>
  response.status(200).send("hola mundo desde el server")
);

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("se recibio un pago !!!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command

exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/store-f2b11/us-central1/api
