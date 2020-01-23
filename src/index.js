let express = require("express");
let app = express();
const bodyParser = require("body-parser");

const rootDir = __dirname;
console.log("Root directory Name", rootDir);
/** 4) Serve static assets  */
app.use(express.static("public"));

// place it before all the routes !
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// --> 7)  Mount the Logger middleware here
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
/* app.use((req, res, next) => {
  var string = req.method + " " + req.path + " - " + req.ip;
  res.send(string);
  next();
}); */
// --> 11)  Mount the body-parser middleware  here
/** 1) Meet the node console. */
/** 2) A first working Express Server */
/* app.get('/', (req, res) => {
    res.send("Hello Express");
  }) */
/** 3) Serve an HTML file */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/** 5) serve JSON on a specific route */
/* app.get("dialingcodes", (req, res) => {
  res.json(getCountryData());
}); */
/** 6) Use the .env file to configure the app */
// process.env.MESSAGE_STYLE

/** 8) Chaining middleware. A Time server */
/** 9)  Get input from client - Route parameters */
/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
/** 11) Get ready for POST Requests - the `body-parser` */

/** 12) Get data form POST  */

let port = process.env.PORT || 3000;
// listen for requests :)
app.listen("8080", function() {
  console.log("Your app is listening on port 8080");
});
