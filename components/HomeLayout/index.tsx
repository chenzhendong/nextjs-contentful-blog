import { FeedsListPanel } from "components/FeedsListPanel";
import { ProfileSidePanel } from "components/ProfileSidePanel";

export function HomeLayout() {
    return (
        <div className="box m-4 p-6">
            <div className="tile is-ancestor">
                <div className="tile is-3"><ProfileSidePanel /></div>
                <div className="divider is-vertical"></div>
                <div className="tile is-8"><FeedsListPanel /></div>
            </div>
        </div>
    );
}