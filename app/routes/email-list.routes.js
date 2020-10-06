module.exports = app => {
    const emailAddress = require("../controllers/email-list.controller.js");
  
    // Add email to email list
    app.post("/email-list", emailAddress.create);
  
    // Retrieve all emails from email list
    app.get("/email-list", emailAddress.findAll);
};