
import { Feed } from "components/Feed";

export function FeedsList( props: any ) {
    const posts:any[] = props.posts;
    return (
        <div className="container">
            <div>
                {
                    posts.map( 
                        p => <Feed slug={p.fields.slug as string} post={p as any} />
                    )
                }
            </div>
            <div className="level container category-style is-size-3 m-4">
                <div className="level-left">Prev</div>
                <div className="level-right">Next</div>
            </div>                
        </div>
    )
};