import path from "path";
import fs, {promises as fsPromise} from "fs";
import matter from "gray-matter";
import {Post} from "./entity";

const markdownDir = path.join(process.cwd(), 'markdown');

export const getPost = (fileName:string) => {
  const fullPath = path.join(markdownDir, fileName);  
  const text = fs.readFileSync(fullPath, 'utf8');
  let {data: meta, content} = matter(text) as matter.GrayMatterFile<string>; 
  meta.id = fileName.substring(0, fileName.length-3);  
  return {meta, content} as Post; 
};

export const getPosts = async () => {
  const markdownDir = path.join(process.cwd(), 'markdown');
  const fileNames = await fsPromise.readdir(markdownDir);
  const blogs = fileNames.map( fileName => {
    let p = getPost(fileName);
    p.content = p.content.substring(0, 200); 
    return p;
  });  
  return blogs;
};