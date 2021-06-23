import express from "express";

const app = express();

const urlLogger = (req, res, next) => {
  const url = req.url;
  console.log(`Path: ${url}`);
  next();
};

const timeLogger = (req, res, next) => {
  const now = new Date();
  console.log(`Time: ${now.getFullYear()}.${now.getMonth()}.${now.getDay()}`);
  next();
};

const securityLogger = (req, res, next) => {
  const protocol = req.protocol;
  if (protocol === "https") {
    console.log("Secure ✅");
  } else {
    console.log("Insecure ❌");
  }
  next();
};

const protectMw = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return;
  }
  next();
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectMw);

app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(process.env.PORT, () => `Listening!✅`);
