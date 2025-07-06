// import { eq } from 'drizzle-orm';
// import { drizzleDb } from '.';
// import { postsTable } from './schemas';

// // (async () => {
// //   const posts = await drizzleDb.select().from(postsTable);
// //   const post = posts.map(post => post.slug);
// //   console.log(post);
// // })();

// (async () => {
//   await drizzleDb
//     .update(postsTable)
//     .set({
//       title: '$$$$$ Olá, agora esta slug esta alterada',
//       published: true,
//     })
//     .where(eq(postsTable.slug, 'rotina-matinal-de-pessoas-altamente-eficazes'));
// })();
