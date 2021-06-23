export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const trending = (req, res) =>
  res.render("trending", { pageTitle: "Trending" });
export const newStories = (req, res) =>
  res.render("newStories", { pageTitle: "New Stories" });
export const seeStory = (req, res) =>
  res.render("seeStory", { pageTitle: "See Story" });
export const editStory = (req, res) =>
  res.render("editStory", { pageTitle: "Edit Story" });
export const deleteStory = (req, res) =>
  res.render("deleteStory", { pageTitle: "Delete Story" });
