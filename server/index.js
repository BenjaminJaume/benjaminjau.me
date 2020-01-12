const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const cors = require("cors");
const dotenv = require("dotenv").config();
const { Pool } = require("pg");
const connectionString =
  process.env.DATABASE_URL || process.env.DATABASE_URL_DEV_LOCALHOST;

const pool = new Pool({
  connectionString
});

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
  app.get("/projects.json", function(req, res) {
    pool.connect(function(err, client, done) {
      if (err) {
        console.log("Can not connect to the DB because of " + err);
        res.status(400).send({ error: true });
      }
      client.query("SELECT * FROM projects ORDER BY date DESC", function(
        err,
        result
      ) {
        done();
        if (err) {
          console.log(err);
          res.status(400).send(err);
        }
        res.status(200).send(result.rows);
      });
    });
  });

  // Answer API requests.
  app.get("/important-projects.json:query", function(req, res) {
    pool.connect(function(err, client, done) {
      if (err) {
        console.log("Can not connect to the DB because of " + err);
        res.status(400).send({ error: true });
      }
      client.query(req.params.query, function(err, result) {
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
