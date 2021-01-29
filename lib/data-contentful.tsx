import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_TOKEN as string
});

export async function getBlogPost(slug: string) {
    const bp = await client.getEntries({
        content_type: "blogPost",
        "fields.slug": slug
    })
    return JSON.stringify(bp.items[0]);
}

export async function getBlogPosts(categoryName: string, skip: number, limit: number) {
    let bps = undefined;
    let config = {
        skip: skip?skip:0,
        limit: limit?limit:2,
        content_type: "blogPost",
        select: "fields.slug,fields.title,fields.tags,fields.description,fields.publishDate",
        order: '-fields.publishDate'
    } as {[key: string]: any};
    if(categoryName){
        config["fields.tags"] = categoryName;       
    }
    bps = await client.getEntries(config);
    if(bps) {
        return JSON.stringify(bps);
    }
    return undefined;
}

export async function getCategories() {
    const t = await client.getContentType('blogPost')
    for ( const f of t.fields) {
        if ( f.name === "Tags" && f.items && f.items.validations) {
            return JSON.stringify(f.items?.validations[0].in as Array<string>);
        }
    }
    return "[]";
}

export async function getPerson(id?: string) {
    let ps = undefined
    if(id){
        ps = await client.getEntries({
            content_type: "person",
            'sys.id': id,
        });
    } else {
        ps = await client.getEntries({
            content_type: "person"
        });        
    }
    if(ps.items) {
        return JSON.stringify(ps.items[0]);
    }
    return undefined;
}

export async function getPeople() {
    let ps = await client.getEntries({
        content_type: "person"
    });
    return JSON.stringify(ps.items);
}


// (async () => {
//     try{
//         const bps = await getBlogPosts("General");
//         if(bps) {
//             console.log(bps[0])
//         }
//     } catch (e) {
//         console.log(e)
//     }
// })();