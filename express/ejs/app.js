var express = require("express"),
  app = express(),
  post = require("./routes/post");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// middleware

var logger = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var connect = require("connect");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  methodOverride(function(req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// CSRF対策
var cookieParser = require("cookie-parser");
var session = require("express-session");
var csrf = require("csurf");

var csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(session({ secret: "2348D&FSDF" }));
app.use(csrf());
app.use(function(req, res, next) {
  res.locals.csrftoken = req.csrfToken();
  next();
});

app.use(logger("dev"));

app.use(function(err, req, res, next) {
  res.send(err.message);
});

// router

app.get("/", post.index);
app.get("/posts/:id([0-9]+)", post.show);
app.get("/posts/new", post.new);
app.post("/posts/create", post.create);
app.get("/posts/:id/edit", post.edit);
app.put("/posts/:id", post.update);
app.delete("/posts/:id", post.destroy);

app.listen(3000);
console.log("server starting...");
