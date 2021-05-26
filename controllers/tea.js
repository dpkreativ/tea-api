const Tea = require("../models/tea");
const multer = require("multer");

// create storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

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
  Tea.deleteMany({}, (err, data) => {
    if (err) {
      return res.json({ message: "Complete delete failed" });
    } else {
      return res.json({ message: "complete delete successful" });
    }
  });
};

// Get specific tea
const getTea = (req, res, next) => {
  let name = req.params.name;
  Tea.findOne({ name: name }, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    } else if (data === null) {
      return res.json({ message: "Tea does not exist" });
    } else {
      return res.json(data);
    }
  });
};

// Add comment for tea
const teaComment = (req, res, next) => {
  let name = req.params.name; // get the tea
  let newComment = req.body.comment; // get the comment

  // create the comment object to push to array
  const comment = {
    text: newComment,
    date: new Date(),
  };

  // find the tea and add the comment to it
  Tea.findOne({ name: name }, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    } else if (!name || !newComment) {
      return res.json("Tea does not exist");
    } else {
      // add comment to comments array
      data.comments.push(comment);

      // Save changes to db
      data.save((err) => {
        if (err) {
          return res.json({ message: "Comment failed to add.", Error: err });
        }
        return res.json(data);
      });
    }
  });
};

// Delete specific tea
const deleteTea = (req, res, next) => {
  let name = req.params.name;
  Tea.deleteOne({ name: name }, (err, data) => {
    if (err) {
      return res.json({ Error: err });
    } else {
      return res.json("Tea deleted successfully");
    }
  });
};

module.exports = {
  newTea,
  getAllTea,
  deleteAllTea,
  getTea,
  teaComment,
  deleteTea,
};
