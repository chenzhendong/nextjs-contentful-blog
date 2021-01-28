import {CategoryMenu} from "components/CategoryMenu"
import {ProfilePanel} from "components/ProfilePanel"

type Props = {
    people: string,
    categories: string
}


export function SidePanel(props: Props) { 
    return (
        <div className="container">
            <ProfilePanel people={props.people} />
            <div className="box mt-6">
                <CategoryMenu categories={props.categories}/>
                <div className="">About me</div>
            </div>           
        </div>
    );
}