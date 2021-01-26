import { createClient } from "contentful";

(async () => {
    try{
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID as string,
            accessToken: process.env.CONTENTFUL_TOKEN as string
        });
        const entries = await client.getEntries();
        //console.log(entry)
        // entries.items.forEach( (entry:any) => {
        //     console.log(entry)
        // });
    } catch (e) {
        console.log(e)
    }
})();