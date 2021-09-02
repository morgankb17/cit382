let mysql = require("mysql2");
let dbInfo = require("./dbInfo.js");
let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");

let app = express();
app.use(cors());

// Add static route for non-Node.js pages
app.use(express.static("public"));

// Configure body parser for handling post operations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get memeVault - in class demo
app.get("/memeVault/:meme_id?", function (req, res) {
  console.log("Route /memeVault GET", req.params);
  // console.log('headers: ' + JSON.stringify(req.headers));
  let data = [];
  let sql = "SELECT * FROM memeVault";
  if (req.params.meme_id !== undefined) {
    sql += " WHERE meme_id = ?";
    data = [req.params.meme_id];
    // Object technique:
    // sql += " WHERE ?";
    // data = req.params;
    console.log(data);
  } else {
    sql += " ORDER BY meme_id";
  }
  console.log("SQL", sql);
  connection.query(sql, data, function (errQuery, rows) {
    if (errQuery) {
      console.log(errQuery);
      res.json({ rows: [], err: errQuery });
    } else if (rows) {
      console.log("Rows returned", rows.length);
      res.json({ rows: rows, err: "" });
    } else {
      console.log("No meme rows...\n");
      res.json({ rows: [], err: "" });
    }
  });
});

//get for user table
app.get("/user/:username?", function (req, res) {
  console.log("Route /user GET", req.params);
  // console.log('headers: ' + JSON.stringify(req.headers));
  let data = [];
  let sql = "SELECT * FROM user";
  if (req.params.meme_id !== undefined) {
    sql += " WHERE username = ?";
    data = [req.params.username];
    // Object technique:
    // sql += " WHERE ?";
    // data = req.params;
    console.log(data);
  } else {
    sql += " ORDER BY username";
  }
  console.log("SQL", sql);
  connection.query(sql, data, function (errQuery, rows) {
    if (errQuery) {
      console.log(errQuery);
      res.json({ rows: [], err: errQuery });
    } else if (rows) {
      console.log("Rows returned", rows.length);
      res.json({ rows: rows, err: "" });
    } else {
      console.log("No meme rows...\n");
      res.json({ rows: [], err: "" });
    }
  });
});

// No guarantees that the following code works, simply posted
// from memeVaul.js server from CIT 381
// Add memeVaul
app.post("/memeVault", function (req, res) {
  console.log("Route /memeVault POST");
  let data = {
    meme_id: req.body.meme_id,
    username: req.body.username,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
    img_id: req.body.img_id,
    caption: req.body.caption
  };
  console.log(data);
  connection.query("INSERT INTO memeVault SET ?", data, function (
    errQuery,
    result
  ) {
    if (errQuery) {
      console.log(errQuery);
      res.json({ status: "Error", err: errQuery });
    } else {
      console.log("Insert ID: ", result.insertId);
      res.json({ status: result.insertId, err: "" });
    }
  });
});

app.post("/user", function (req, res) {
  console.log("Route /user POST");
  let data = {
    username: req.body.username,
    posted: req.body.posted
  };
  console.log(data);
  connection.query("INSERT INTO user SET ?", data, function (errQuery, result) {
    if (errQuery) {
      console.log(errQuery);
      res.json({ status: "Error", err: errQuery });
    } else {
      console.log("Insert ID: ", result.insertId);
      res.json({ status: result.insertId, err: "" });
    }
  });
});

// Delete memeVaul
app.delete("/memeVault/:meme_id?", function (req, res) {
  console.log("Route /memeVault DELETE");
  let sql = "DELETE FROM memeVault WHERE meme_id = ?";
  // Object technique:
  // let sql = "DELETE FROM memeVault WHERE ?";
  if (req.params.meme_id !== undefined) {
    let data = [req.params.meme_id];
    // Object technique:
    // let data = {meme_id: req.params.meme_id};
    connection.query(sql, data, function (errQuery, result) {
      if (errQuery) {
        console.log(errQuery);
        res.json({ status: "Error", err: errQuery });
      } else {
        console.log("Deleted");
        res.json({ status: "Deleted", err: "" });
      }
    });
  } else {
    let s = "Invalid or missing meme_id";
    console.log(s);
    res.json({ status: "Error", err: s });
  }
});

app.delete("/memeVault_sp/:meme_id?", function (req, res) {
  console.log("Route /memeVault DELETE");
  let sql = "CALL sp_deletememeVault(?)";
  // Object technique:
  // let sql = "DELETE FROM memeVault WHERE ?";
  if (req.params.meme_id !== undefined) {
    let data = [req.params.meme_id];
    // Object technique:
    // let data = {meme_id: req.params.meme_id};
    connection.query(sql, data, function (errQuery, result) {
      if (errQuery) {
        console.log(errQuery);
        res.json({ status: "Error", err: errQuery });
      } else {
        console.log("Deleted");
        res.json({ status: "Deleted", err: "" });
      }
    });
  } else {
    let s = "Invalid or missing meme_id";
    console.log(s);
    res.json({ status: "Error", err: s });
  }
});

// Update memeVaul
app.put("/memeVault", function (req, res) {
  console.log("Route /memeVault PUT");
  let data = [
    {
      meme_id: req.body.meme_id,
      caption: req.body.caption
    },
    req.body.meme_id
  ];
  connection.query("UPDATE memeVault SET ? WHERE meme_id=?", data, function (
    errQuery,
    result
  ) {
    if (errQuery) {
      console.log(errQuery);
      res.json({ status: "Error", err: errQuery });
    } else {
      console.log(
        "Updated ID: ",
        req.body.meme_id,
        ", Affected Rows: ",
        result.affectedRows
      );
      res.json({ status: req.body.meme_id, err: "", message: "Row updated" });
    }
  });
});

// Handle missing pages requested using GET HTTP verb
app.get("*", function (req, res) {
  res.status(404).send("Sorry that page does not exist");
});
console.log("Creating connection...\n");
let connection = mysql.createConnection({
  host: dbInfo.dbHost,
  port: dbInfo.dbPort,
  user: dbInfo.dbUser,
  password: dbInfo.dbPassword,
  database: dbInfo.dbDatabase
});
// Connect to database
connection.connect(function (err) {
  console.log("Connecting to database...\n");

  // Handle any errors
  if (err) {
    console.log(err);
    console.log("Exiting application...\n");
  } else {
    console.log("Connected to database...\n");
    // Listen for connections
    // Note: Will terminate with an error if database connection
    // is closed
    const ip = "localhost";
    const port = 8080;
    app.listen(port, ip, function () {
      try {
        console.log("memeVault server app listening on port " + port);
      } catch (err) {
        console.log(err);
      }
    });
  }
});
