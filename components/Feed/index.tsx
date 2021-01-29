
import Link from 'next/link';
import { formatDate } from 'lib/format'

export function Feed(props: any) {
    const post = props.post;
    return (
        <div className="box">
            <div>
                <div className="subtitle is-6">
                    <span className="mr-6" >{formatDate(post.fields.publishDate as string)}</span>
                    <span className="category-style">{post.fields.tags[0]}</span>
                </div>
                <div className="title is-4">{post.fields.title}</div>
            </div>
            <div className="divider"></div>
            <div className="content mt-3">{post.fields.description + " ..."}</div>
            <div className="foot"><Link as={`/blog/${post.fields.slug}`} href="/blog/[slug]"><a>Read More</a></Link></div>
        </div>
    );
};