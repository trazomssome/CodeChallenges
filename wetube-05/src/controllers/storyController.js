export const home = (req, res) => res.send("home");
export const trending = (req, res) => res.send("trending");
export const newStory = (req, res) => res.send("newStory");

export const viewStory = (req, res) => {
  console.log(req.params);
  res.send(`viewStory`);
};
export const edit = (req, res) => res.send("edit");
export const deleteStory = (req, res) => res.send("deleteStory");
