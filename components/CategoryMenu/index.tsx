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
                className={(!category) ? 'has-text-underline' : ''}
                onClick={() => setCategory("")}
            ><a className="has-text-black has-text-weight-bold">Category</a></div>
            <div className="ml-3">
                {
                    (categories) ? (
                        categories.sort().map(
                            (c: string) =>
                                <div key={c}
                                    className={((c === category) ? 'has-text-underline' : '') + ' pl-' + ((c.split('|').length - 1) * 2)}
                                    onClick={() => setCategory(c)}
                                >
                                    <a className="category-style">{lastElement(c)}</a>
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

