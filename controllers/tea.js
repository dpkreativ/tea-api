const newTea = (req, res, next) => {
  res.json({ message: "POST new tea" }); // dummy function for now
};

module.exports = { newTea };
