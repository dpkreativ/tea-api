const Tea = require("../models/tea");

// Create new tea
const newTea = (req, res, next) => {
  Tea.findOne({ name: req.body.name }, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    } else if (data === null) {
      const newTea = new Tea({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        keywords: req.body.keywords,
        origin: req.body.origin,
        brew_time: req.body.brew_time,
        temperature: req.body.temperature,
      });
      newTea.save((err, data) => {
        if (err) return res.json({ Error: err });
        return res.json(data);
      });
    } else {
      return res.json({ message: "Tea already exists" });
    }
  });
};

// Get all tea
const getAllTea = (req, res, next) => {
  Tea.find({}, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    } else {
      return res.json(data);
    }
  });
};

// Delete all tea
const deleteAllTea = (req, res, next) => {
  res.json({ message: "DELETE all tea" });
};

// Get specific tea
const getTea = (req, res, next) => {
  res.json({ message: "GET specific tea" });
};

// Add comment for tea
const teaComment = (req, res, next) => {
  res.json({ message: "POST tea commment" });
};

// Delete specific tea
const deleteTea = (req, res, next) => {
  res.json({ message: "DELETE specific tea" });
};

module.exports = {
  newTea,
  getAllTea,
  deleteAllTea,
  getTea,
  teaComment,
  deleteTea,
};
