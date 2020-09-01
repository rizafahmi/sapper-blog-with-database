import { connect, getPosts } from './_database.js';

export async function get(req, res) {
  try {
    const db = connect();
    const posts = await db.any(`SELECT * FROM posts`);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(posts));
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.send({ err });
  }
}

export async function post(req, res) {
  try {
    const db = connect();
    const { title, slug, html } = req.body;
    console.log(req.body);
    const { id } = await db.one(
      `INSERT INTO posts (title, slug, html) VALUES('${title}', '${slug}', '${html}') returning id`
    );
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(id));
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(err));
  }
}
