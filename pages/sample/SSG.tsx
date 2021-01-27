import {GetStaticProps, NextPage} from "next";
import {getPosts} from "lib/data-fs";
import Link from "next/link";
import * as React from "react";

type Post = {
  id: string,
  title: string
}

type Props = {
  posts: Post[];
}
// props 中有下面导出的数据 posts
const PostsIndex: NextPage<Props> = (props) => {
  const {posts} = props;
	// 前后端控制台都能打印 -> 同构
  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(p => <div key={p.id}>
        <Link href={`/posts/${p.id}`}>
          <a>
            {p.id}
          </a>
        </Link>
      </div>)}
    </div>
  );
};

export default PostsIndex;
// 实现SSG
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
};
