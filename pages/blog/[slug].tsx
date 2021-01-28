import { PostPage } from 'components/PostPage';
import { getBlogPost } from 'lib/data-contentful';
import { GetServerSideProps } from 'next'

type Props = {
    post: string
  }

function Blog ( props: Props) {
    const post = JSON.parse(props.post);
    return (    
        <div className="application">
            <PostPage post={post} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {query} = ctx;
    const post = await getBlogPost(query.slug as string);  
    return { props: {post: post} };
}
  
export default Blog;