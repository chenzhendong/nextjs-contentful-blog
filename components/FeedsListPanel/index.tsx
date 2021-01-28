import useSWR from "swr";
import { Feed } from "components/Feed";

const fetcher = (...args: Parameters<typeof fetch>) =>  fetch(...args).then(response => response.json());

export function FeedsListPanel()  {
    const {data:posts, error} = useSWR("/api/posts", fetcher); 

    return (    
        <div className="container">   
            {
                posts ? (  
                    <div className="container"> 
                        <div>
                            {
                                posts.map( 
                                    (p:any) => <Feed slug={p.fields.slug as string} post={p as any} />
                                )
                            }
                        </div>
                        <div className="level container category-style is-size-3 m-4">
                            <div className="level-left">Prev</div>
                            <div className="level-right">Next</div>
                        </div>  
                    </div>
                )
                : (<div> Loading ... </div>)
            }
        </div>
    )
};