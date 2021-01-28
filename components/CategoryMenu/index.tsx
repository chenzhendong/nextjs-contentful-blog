type Props = {
    categories: string
}

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

export function CategoryMenu(props: Props) {
    const cl = JSON.parse(props.categories);    
    cl.sort();
    return (
        <div>
            <div>Category</div>
            <div className="ml-3 category-style">
                { 
                    cl.map(
                        (c: string) => <div key={c}>{c}</div>
                    )                
                }                
            </div>
        </div>
    )
}

