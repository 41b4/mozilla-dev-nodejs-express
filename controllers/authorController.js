const Author = require("../models/author");

// mostrar todos los autores
exports.author_list = (req, res) => {
  res.send("Not implemented author list");
};

exports.author_detail = (req, res) => {
  res.send(`Author detail: ${req.params.id}`);
};
// get
exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// post
exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// delete get
exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// delete post
exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// update get
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// update post
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
