type Props = {
    people: string
}

export function ProfilePanel(props: Props) {
    const ps = JSON.parse(props.people); 
    let isMultiAuthors = false;
    if(ps[1]) {
        isMultiAuthors = true;
    }
    const p = ps[0];
    const imgUrl = "https:" + p.fields.image.fields.file.url;

    return (
        <div className="box p-5">
            <div className="title is-5 category-style">Author{isMultiAuthors && "s"}:</div>
            <div className="container">
                <div className="level">
                    <figure className="level-left image is-128x128">
                        <img className="is-rounded" src={imgUrl} height="200" width="200" />
                    </figure>
                    { isMultiAuthors && <div className="level-right title is-4 category-style">&gt;</div> }
                </div>
                <div className="container mt-5">
                    <div className="title is-5">{p.fields.name}</div>
                    <div className="content has-text-muted pt-2">{p.fields.shortBio}</div>
                </div> 
            </div>                          
        </div>
    );
}