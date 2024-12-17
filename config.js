/** Common config for bookstore. */
require("dotenv").config();

let DB_URI = process.env.DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = `${DB_URI}/bookstore`;
}


module.exports = { DB_URI };