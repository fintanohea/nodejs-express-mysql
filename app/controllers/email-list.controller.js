const EmailAddress = require("../models/email-list.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const emailAddress = new EmailAddress({
        email: req.body.email
    });

    // Save Customer in the database
    EmailAddress.create(emailAddress, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while adding email to the email list."
        });
        else res.send(data);
    });   
};

// Retrieve all emails from the database.
exports.findAll = (req, res) => {
    EmailAddress.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving email list."
          });
        else res.send(data);
    });
};

