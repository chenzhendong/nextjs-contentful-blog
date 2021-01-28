import { FeedsListPanel } from "components/FeedsListPanel";
import { SidePanel } from "components/SidePanel";

type Props = {
    people: string,
    categories: string
}

export function HomeLayout(props: Props) {
    
    return (
        <div className="box m-4 p-6">
            <div className="tile is-ancestor">
                <div className="tile is-3"><SidePanel people={props.people}  categories={props.categories} /></div>
                <div className="divider is-vertical"></div>
                <div className="tile is-8"><FeedsListPanel /></div>
            </div>
        </div>
    );
}