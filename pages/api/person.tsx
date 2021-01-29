import { getPerson } from 'lib/data-contentful';

export default async function handler(req: any, res: any) {
  const p = await getPerson(req.query.id as string);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(p);
  res.end();
};
