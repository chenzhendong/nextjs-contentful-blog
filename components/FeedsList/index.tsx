
import { Feed } from "components/Feed";
import { Post } from "../../lib/entity-fs";

type Props = {
    posts: Post[]
  }

export function FeedsList( props: Props ) {
    const posts:Post[] = props.posts;
    return (
        <div className="container">
            <div>
                {
                    posts.map(p => <Feed key={p.meta.id} post={p} />)
                }
            </div>
            <div className="level container category-style is-size-3 m-4">
                <div className="level-left">Prev</div>
                <div className="level-right">Next</div>
            </div>                
        </div>
    )
};