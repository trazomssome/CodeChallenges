/*
You DONT have to import the User with your username.
Because it's a default export we can nickname it whatever we want.
So import User from "./models"; will work!
You can do User.find() or whatever you need like normal!
*/
import User from "./models/User";
import bcrypt from "bcrypt";

// Add your magic here!
export const home = (req, res) => {
  //Logined ? Profile : Login
  if (req.session.loggedIn) {
    return res.redirect("/profile");
  } else {
    return res.redirect("/login");
  }
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { name, username, password, password2 } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match."
    });
  }
  const exists = await User.findOne({ username: req.body.username });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username is already taken."
    });
  }
  try {
    await User.create({
      name,
      username,
      password
    });
    return res.redirect("/login");
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle: "Join", errorMessage: error._message });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists."
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password"
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/profile");
};

export const profile = (req, res) => {
  res.render("profile", { pageTitle: `${req.session.user.name} 's profile` });
};

export const logout = (req, res) => {
  req.session.loggedIn = false;
  req.session.user = undefined;
  res.redirect("/");
};
