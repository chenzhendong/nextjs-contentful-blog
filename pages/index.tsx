import { CategoryMenu } from 'components/CategoryMenu';
import { FeedsListPanel } from 'components/FeedsListPanel';
import { HomeLayout } from 'components/HomeLayout';
import { ProfilePanel } from 'components/ProfilePanel';
import { SidePanel } from 'components/SidePanel';

export default function Home()  {   
  const categoryMenu = <CategoryMenu />
  const profilePanel = <ProfilePanel />
  const feedListPanel = <FeedsListPanel />
  const sidePanel = <SidePanel up={profilePanel} down={categoryMenu}/>

  return (    
    <div className="application">              
        <HomeLayout left = {sidePanel} right= {feedListPanel} />
    </div>
  )
};
