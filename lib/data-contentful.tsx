import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_TOKEN as string
});

export async function getBlogPosts() {
    const bps = await client.getEntries({
        content_type: "blogPost",
        order: '-fields.publishDate'
    });
    if(bps.items) {
        return bps.items;
    }
    return undefined;
}

export async function getBlogPostsByCategory(categoryName: string) {
    const bps = await client.getEntries({
        content_type: "blogPost",
        'fields.tags': categoryName,
        order: '-fields.publishDate'
    });
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

export async function getPerson() {
    const p = await client.getEntries({content_type: "person"});
    if(p.items) {
        return p.items[0];
    }
    return undefined;
}


(async () => {
    try{
        const bps = await getBlogPostsByCategory("General");
        if(bps) {
            console.log(bps[0])
        }
    } catch (e) {
        console.log(e)
    }
})();