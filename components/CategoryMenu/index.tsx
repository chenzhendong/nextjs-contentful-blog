type Props = {
    categories: string
}

export function CategoryMenu(props: Props) {
    const cl = JSON.parse(props.categories);    
    return (
        <div>
            <div>Blogs</div>
            <div className="ml-3 category-style">
                { 
                    cl.map(
                        (c: string) => <div>{c}</div>
                    )                
                }                
            </div>
        </div>
    )
}