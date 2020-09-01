import { connect, getPosts } from './_database.js';
// import posts from './_posts.js';

// const contents = JSON.stringify(
//   posts.map((post) => {
//     return {
//       title: post.title,
//       slug: post.slug
//     };
//   })
// );

export async function get(req, res) {
  const db = connect();
  try {
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
