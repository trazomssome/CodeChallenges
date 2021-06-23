import multer from "multer";

export const uploadFile = multer({
  dest: "txt"
});
