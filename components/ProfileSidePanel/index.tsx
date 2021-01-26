import Image from 'next/image'
import {CategoryMenu} from "components/CategoryMenu"

export function ProfileSidePanel() {
    return (
        <div className="container">
            <div className="container">
                <figure className="image is-128x128">
                    <Image className="is-rounded" src="/image/national-mall.jpg" height="200" width="200" />
                </figure>
            </div>
            <div className="box mt-5">
                <div className="title is-5">Zhendong Chen</div>
                <div className="content has-text-muted pt-2">
                    I am a full stacksoftware developer with various interests.  As a showcase website, this blog gives me a place to engrave my journal.
                </div>
            </div>
            <div className="box mt-6">
                <CategoryMenu />
                <div className="">About me</div>
                <div className="">About this website</div>
            </div>
            {/* <div className="box mt-6">
                <div className="image is-64x64">
                    <figure className="image is-centered">
                        <Image className="is-rounded" src="/image/linkedin.jpg" height="200" width="200" />
                    </figure>
                </div>
            </div> */}
        </div>
    );
}