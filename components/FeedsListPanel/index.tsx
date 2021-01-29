import useSWR from "swr";
import { Feed } from "components/Feed";
import { useSelector, useDispatch } from 'react-redux'

const fetcher = (...args: Parameters<typeof fetch>) =>  fetch(...args).then(response => response.json());

export function FeedsListPanel(props: any)  {
    const category = useSelector((state: any) => state.category)
    const page: number = useSelector((state: any) => state.page)
    const pageSize: number = useSelector((state: any) => state.pageSize)
    const dispatch = useDispatch()
    const {data:posts, error} = useSWR("/api/posts?"
        + "category="+ category
        + "&skip=" + page*pageSize 
        + "&limit=" + pageSize, fetcher); 

    const prevPage = () =>
        dispatch({
            type: 'PREV_PAGE'
        })
    const nextPage = () =>
        dispatch({
            type: 'NEXT_PAGE'
        })

    return (    
        <div className="container">   
            {
                posts ? (  
                    <div className="container"> 
                        <div>
                            {
                                posts.items.map( 
                                    (p:any) => <Feed slug={p.fields.slug as string} post={p as any} />
                                )
                            }
                        </div>
                        <div className="level container category-style is-size-5 m-4">
                            <div className="level-left">
                                <a onClick={prevPage}>
                                    {(posts.skip>0) && "Prev"}
                                </a>
                            </div>
                            <div className="level-right">
                                <a onClick={nextPage}>
                                    {((posts.skip+posts.limit)<posts.total) && "Next"}
                                </a>
                            </div>
                        </div>  
                    </div>
                )
                : (<div> Loading ... </div>)
            }
        </div>
    )
};