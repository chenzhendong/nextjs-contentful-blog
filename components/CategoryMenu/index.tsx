import useSWR from 'swr';
import { useSelector, useDispatch } from 'react-redux'

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(response => response.json());
function lastElement(c: string) {
    let arr = c.split('|');
    return arr[arr.length - 1];
}

export function CategoryMenu(props: any) {
    const category = useSelector((state: any) => state.category)
    const dispatch = useDispatch()
    const { data: cl, error } = useSWR('/api/category', fetcher);
    let categories = cl as Array<string>;
    const setCategory = (category: string) => {
        dispatch({
            type: 'CHANGE_CATEGORY',
            payload: category
        })
    }

    return (
        <div>
            <div
                className={((!category) ? '' : 'is-outlined ') + "button is-info is-small is-rounded"}
                onClick={() => setCategory("")}
            >All Articles</div>
            <div className="ml-3">
                {
                    (categories) ? (
                        categories.sort().map(
                            (c: string) =>
                                <div>
                                    <div key={c}
                                        className={((c === category) ? '' : 'is-outlined ') 
                                        + 'button is-info is-small is-rounded mt-3 ml-' 
                                        + ((c.split('|').length - 1) * 3)}
                                        onClick={() => setCategory(c)}
                                    >
                                        {lastElement(c)}
                                    </div>
                                </div>
                        )
                    ) :
                        (
                            <div className="category-style">Loading ...</div>
                        )
                }
            </div>
        </div>
    )
}

