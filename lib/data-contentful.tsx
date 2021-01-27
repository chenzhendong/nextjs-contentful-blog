import { createClient } from "contentful";
import { symlinkSync } from "fs";

export function getBogPosts() {

}


(async () => {
    try{
        const client = createClient({
            space: process.env.CONTENTFUL_SPACE_ID as string,
            accessToken: process.env.CONTENTFUL_TOKEN as string
        });
        const entries = await client.getEntries();
        entries.items.forEach( (entry:any) => {
            const fields = entry.fields;
            console.log(entry.sys.space)
            console.log(entry.sys.contentType)
            if(fields) {
                const image = fields.image;
                if(image) {
                    console.log(image)
                }                
            }
            
        });
    } catch (e) {
        console.log(e)
    }
})();