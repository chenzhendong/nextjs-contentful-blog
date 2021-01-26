import { PostPage } from 'components/PostPage';
import { GetServerSideProps } from 'next'
import {getPost} from "../../lib/data-fs"
import {Post} from "../../lib/entity"

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
    const post = getPost(query.blog+".md");    
    return { props: {post: JSON.stringify(post)} };
}
  
export default Blog;