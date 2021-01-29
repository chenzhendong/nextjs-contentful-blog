import { getPeople } from 'lib/data-contentful';

export default async function handler(req: any, res: any) {
  const p = await getPeople();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(p);
  res.end();
};
