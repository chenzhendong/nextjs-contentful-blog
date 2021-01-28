import { getBlogPosts } from 'lib/data-contentful';

export default async function handler (req: any, res: any) {
  const bps = await getBlogPosts(req.query.category as string);  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(bps);
  res.end();
};