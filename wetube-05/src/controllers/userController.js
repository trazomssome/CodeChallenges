export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");
export const profile = (req, res) => res.send("profile");
export const editProfile = (req, res) => res.send("editProfile");
export const detailProfile = (req, res) => {
  console.log(req.params);
  res.send(`detailProfile`);
};
