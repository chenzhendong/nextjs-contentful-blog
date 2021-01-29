import {CategoryMenu} from "components/CategoryMenu"
import {ProfilePanel} from "components/ProfilePanel"

export function SidePanel(props: any) { 
    return (
        <div className="container">
            {props.up}
            <div className="box mt-6">
                {props.down}
            </div>           
        </div>
    );
}