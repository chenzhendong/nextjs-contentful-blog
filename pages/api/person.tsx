import { getPerson } from 'lib/data-contentful';

export default async function handler (req: any, res: any) {
  const p = await getPerson(req.query.name as string);  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(p));
  res.end();
};
