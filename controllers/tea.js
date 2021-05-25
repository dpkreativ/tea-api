// Create new tea
const newTea = (req, res, next) => {
  res.json({ message: "POST new tea" }); // dummy function for now
};

// Get all tea
const getAllTea = (req, res, next) => {
  res.json({ message: "GET all tea" });
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
