import {NextPage} from "next";
import axios from "axios";
import {useEffect, useState} from "react";
import { Post } from "lib/entity";
import { FeedsList } from "components/FeedsList";

export function FeedsListPanel()  {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get("/api/posts").then(response => {
          setPosts(response.data);
          setIsLoading(false);
        }, () => {
            setIsLoading(true);
        })
    }, []);
    return (    
        <div className="container">   
            {isLoading ? 
                (<div> Loading ... </div>) :   
                <FeedsList posts={ posts } />
            }
        </div>
    )
};