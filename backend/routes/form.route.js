const express = require("express")
const dataRouter = express.Router()
const { checkRole, ROLES } = require("../middlewares/role.middleware");


// API endpoint for creating a book
dataRouter.post("/", checkRole([ROLES.CREATOR]), async (req, res) => {

  // Logic for creating a book    
  const data = req.body
  try {
    const user = new userformModel(data)
    await user.save()
    //  res.json({ message: "Book created successfully" });
    res.send("book created successfully")
  } catch (err) {
    res.send({ "err": err.message })
  }

});


// API endpoint for viewing all books
dataRouter.get("/", checkRole([ROLES.CREATOR, ROLES.VIEW_ALL]), async (req, res) => {
  try {
    let books;

    // Check if the "old" query parameter is present
    if (req.query.old === "1") {
      // Fetch books created 10 minutes ago and earlier
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      books = await userModel.find({ createdAt: { $lte: tenMinutesAgo } });
    } else if (req.query.new === "1") {
      // Fetch books created within the last 10 minutes
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      books = await userModel.find({ createdAt: { $gte: tenMinutesAgo } });
    } else {
      // Fetch all books
      books = await userModel.find();
    }

    res.json({ books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});





// API endpoint for deleting a book 
dataRouter.delete("/delete/:bookId", checkRole([ROLES.CREATOR]), (req, res) => {
  // Logic for deleting a book
  res.json({ message: "Book deleted successfully" });
});





module.exports = { dataRouter }

