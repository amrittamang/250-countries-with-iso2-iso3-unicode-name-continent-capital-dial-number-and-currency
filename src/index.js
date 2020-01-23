import express from "express";
import getCountryData from "./countryDataList.js";
import App from "./app";
let app = express();

if (process.env.DISABLE_XORIGIN) {
  app.use(function(req, res, next) {
    var allowedOrigins = [
      "https://narrow-plane.gomix.me",
      "https://www.freecodecamp.com"
    ];
    var origin = req.headers.origin || "*";
    if (
      !process.env.XORIG_RESTRICT /* || allowedOrigins.indexOf(origin) > -1 */
    ) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
    }
    next();
  });
} else {
  // --> 7)  Mount the Logger middleware here
  /** 7) Root-level Middleware - A logger */
  //  place it before all the routes !
  app.use((req, res, next) => {
    var string = req.method + " " + req.path + " - " + req.ip;
    res.send(string);
    next();
  });
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
  /** 4) Serve static assets  */
  app.use("/", express.static(__dirname + "/public"));
  /** 5) serve JSON on a specific route */
  app.get("dialingcodes", (req, res) => {
    res.json(getCountryData());
  });
  /** 6) Use the .env file to configure the app */
  // process.env.MESSAGE_STYLE

  /** 8) Chaining middleware. A Time server */
  /** 9)  Get input from client - Route parameters */
  /** 10) Get input from client - Query parameters */
  // /name?first=<firstname>&last=<lastname>
  /** 11) Get ready for POST Requests - the `body-parser` */
  // place it before all the routes !
  /** 12) Get data form POST  */
}

let port = process.env.PORT || 8080;
app.listen(port);
