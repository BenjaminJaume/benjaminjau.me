const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const cors = require("cors");
const dotenv = require("dotenv").config();
const pg = require("pg");

//Database Config .env
const config = {
  // host: process.env.PG_HOST,
  host: "ec2-107-21-101-177.compute-1.amazonaws.com",
  // database: process.env.PG_DATABASE,
  database: "d3crhc05b4utv4",
  // port: process.env.PG_PORT,
  port: "5432",
  // user: process.env.PG_USER,
  user: "idhcngimhlmzdn",
  // password: process.env.PG_PASS,
  password: "72532c9c3a2dd7d3764e9cfc9f0a7d87fe7570ceaf1c18ebc2717f72c6382cf7",
  ssl: true,
  dialect: "postgres",
  dialectOptions: {
    ssl: { require: true }
  }
};

//Documentation for node-postgres: https://node-postgres.com/
const pool = new pg.Pool(config);

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();
  app.use(cors());

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  // Answer API requests.
  app.get("/api.json", function(req, res) {
    pool.connect(function(err, client, done) {
      if (err) {
        console.log("Can not connect to the DB because of " + err);
        res.status(400).send({});
      }
      client.query("SELECT * FROM projects", function(err, result) {
        done();
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      });
    });
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get("*", function(request, response) {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });

  app.listen(PORT, function() {
    console.error(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on ${PORT}`
    );
  });
}
