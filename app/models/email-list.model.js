const sql = require("./db.js");

// constructor
const EmailAddress = function(emailaddress) {
  this.email = emailaddress.email;
};

EmailAddress.create = (newEmailAddress, result) => {
  sql.query("INSERT INTO email_list SET ?", newEmailAddress, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Signed up to email list successfully: ", { id: res.insertId, ...newEmailAddress });
    result(null, { id: res.insertId, ...newEmailAddress });
  });
};

EmailAddress.getAll = result => {
    sql.query("SELECT * FROM email_list", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("email-list: ", res);
      result(null, res);
    });
};

module.exports = EmailAddress;