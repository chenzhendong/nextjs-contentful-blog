import { getCategories } from 'lib/data-contentful';

export default async function handler (req: any, res: any) {
  const c = await getCategories();  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(c);
  res.end();
};
