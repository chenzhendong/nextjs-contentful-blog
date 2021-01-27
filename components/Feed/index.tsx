
import Link from "next/link";
import { Post } from "../../lib/entity-fs";

type Props = {
    key: string,
    post: Post
}

export function Feed( props: Props ) {
    const post = props.post;    
    return (
        <div className="box">
            <div>
                <div className="subtitle is-5">
                    <span className="mr-6" >{post.meta.date}</span>
                    <span className="category-style">{post.meta.category}</span>
                </div>
                <div className="title is-4">{post.meta.title}</div>            
            </div>
            <div className="divider"></div>
            <div className="content mt-3">{post.content + " ..."}</div>
            <div className="foot"><Link as={"/"+post.meta.category+"/"+post.meta.id} href="[category]/[blog]"><a>Read More</a></Link></div>
        </div>
    );
};