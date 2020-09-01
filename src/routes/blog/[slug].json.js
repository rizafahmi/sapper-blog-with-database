import { connect } from './_database.js';

export async function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  try {
    const db = await connect();
    const post = await db.one(`SELECT * FROM posts WHERE slug='${slug}';`);
    console.log(post);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(post));
  } catch (err) {
    console.error(err);
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }

  // if (lookup.has(slug)) {
  //   res.writeHead(200, {
  //     'Content-Type': 'application/json'
  //   });

  //   res.end(lookup.get(slug));
  // } else {
  //   res.writeHead(404, {
  //     'Content-Type': 'application/json'
  //   });

  //   res.end(
  //     JSON.stringify({
  //       message: `Not found`
  //     })
  //   );
  // }
}
