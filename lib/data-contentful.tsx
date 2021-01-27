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
    return bp.items[0];
}

export async function getBlogPosts(categoryName: string) {
    let bps = undefined;
    if(categoryName){
        bps = await client.getEntries({
            content_type: "blogPost",
            order: '-fields.publishDate'
        });
    } else {
        bps = await client.getEntries({
            content_type: "blogPost",
            'fields.tags': categoryName,
            order: '-fields.publishDate'
        });
    }
    if(bps.items) {
        return bps.items;
    }
    return undefined;
}

export async function getCategories() {
    const t = await client.getContentType('blogPost')
    for ( const f of t.fields) {
        if ( f.name === "Tags") {
            return f.items?.validations[0].in as Array<string>;
        }
    }
    return [] as Array<string>;
}

export async function getPerson(personName?: string) {
    let ps = undefined
    if(personName){
        ps = await client.getEntries({
            content_type: "person",
            'fields.name': personName,
        });
    } else {
        ps = await client.getEntries({
            content_type: "person"
        });        
    }
    if(ps.items) {
        return ps.items[0];
    }
    return undefined;
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