const pgp = require('pg-promise')({});

let db = null;

function connect() {
  if (!db) db = pgp(`postgres://localhost:5432/sapper_blog`);
  return db;
}
module.exports = {
  connect
};
