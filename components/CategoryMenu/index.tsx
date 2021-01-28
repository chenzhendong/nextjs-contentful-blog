import useSWR from "swr";

type StringMap = {[k: string]: any}
function buildCategoryMap(cl: Array<string>) {
    let cmap = {} as StringMap;    
    for(const c of cl) {
        let m = cmap;
        let lastKey = undefined;
        for(const k of c.split("/")) {
            if(!m[k]) {
                m[k] = {} as StringMap;
            }         
            m = m[k]   
        }
    }
    return cmap;
}

const fetcher = (...args: Parameters<typeof fetch>) =>  fetch(...args).then(response => response.json());

export function CategoryMenu() {
    const {data: cl, error} = useSWR("/api/category", fetcher);   
    let categories = cl as Array<string>;
    
    return (
        <div>
            <div>Category</div>
            <div className="ml-3 category-style">
                { 
                    (categories) ? (
                        categories.map(
                            (c: string) => <div key={c}>{c}</div>
                        )   
                    ):
                    (
                        <div className="category-style">Loading ...</div>
                    )             
                }                
            </div>
        </div>
    )
}

