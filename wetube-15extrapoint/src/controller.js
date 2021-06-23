import fs from "fs";

export const home = (req, res) => {
  fs.readdir("txt", (err, files) => {
    if (err) throw err;
    res.render("home", { pageTitle: "TXT2HTML!", files });
  });
};

export const write = (req, res) => {
  return res.redirect("/");
};

export const read = (req, res) => {
  const { id } = req.params;
  fs.readFile("txt/" + id, (err, data) => {
    if (err) throw err;
    res.render("read", { text: data });
  });
};
