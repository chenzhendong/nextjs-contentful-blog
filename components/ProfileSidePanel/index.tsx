import Image from 'next/image'
import {CategoryMenu} from "components/CategoryMenu"

type Props = {
    person: string,
    categories: string
}


export function ProfileSidePanel(props: Props) {
    const p = JSON.parse(props.person); 
    const imgUrl = "https:" + p.fields.image.fields.file.url;
    
    return (
        <div className="container">
            <div className="container">
                <figure className="image is-128x128">
                    <img className="is-rounded" src={imgUrl} height="200" width="200" />
                </figure>
            </div>
            <div className="box mt-5">
                <div className="title is-5">{p.fields.name}</div>
                <div className="content has-text-muted pt-2">{p.fields.shortBio}</div>
            </div>
            <div className="box mt-6">
                <CategoryMenu categories={props.categories}/>
                <div className="">About me</div>
                <div className="">About this website</div>
            </div>           
        </div>
    );
}