import {CategoryMenu} from "components/CategoryMenu"
import {ProfilePanel} from "components/ProfilePanel"

export function SidePanel() { 
    return (
        <div className="container">
            <ProfilePanel />
            <div className="box mt-6">
                <CategoryMenu />
                <div className="">About me</div>
            </div>           
        </div>
    );
}