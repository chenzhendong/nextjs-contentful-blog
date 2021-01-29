import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>  fetch(...args).then(response => response.json());
function lastElement(c: string){
    let arr = c.split("|");
    return arr[arr.length-1];
}

export function CategoryMenu(props: any) {
    const {data: cl, error} = useSWR("/api/category", fetcher);   
    let categories = cl as Array<string>;
    const [category, setCategory] = useState("");
    useEffect(() =>{
        props.onCategoryChange(category);
    })
    
    return (
        <div>
            <div 
                className = {(!category)?"has-text-underline":""}
                onClick={() => setCategory("")}
            >Category</div>
            <div className="ml-3 category-style">
                { 
                    (categories) ? (
                        categories.sort().map(
                            (c: string) => 
                            <div key={c} 
                                className = {((c===category)?"has-text-underline":"" ) + " pl-"+((c.split("|").length-1)*2)}
                                onClick={() => setCategory(c)}
                            >
                                {lastElement(c)}
                            </div>
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

