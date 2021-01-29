import { getBlogPosts } from 'lib/data-contentful';

export default async function handler(req: any, res: any) {
  const limit = req.query.limit
  const skip = req.query.skip
  const category = req.query.category
  const bps = await getBlogPosts(category, skip, limit);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(bps);
  res.end();
};