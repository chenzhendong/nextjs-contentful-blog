export type PostMeta = {
    id: string;
    title: string;
    category: string;
    email: string
    date: Date;
}

export type Post = {
    meta: PostMeta;
    content: string;    
}
