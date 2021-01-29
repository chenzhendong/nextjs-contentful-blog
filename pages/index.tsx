import { CategoryMenu } from 'components/CategoryMenu';
import { FeedsListPanel } from 'components/FeedsListPanel';
import { HomeLayout } from 'components/HomeLayout';
import { ProfilePanel } from 'components/ProfilePanel';
import { SidePanel } from 'components/SidePanel';
import { useState } from 'react';

export default function Home()  { 
  const [category, setCategory] = useState("")
   
  const categoryMenu = <CategoryMenu />
  const profilePanel = <ProfilePanel />
  const feedListPanel = <FeedsListPanel category={category}/>
  const sidePanel = <SidePanel up={profilePanel} down={categoryMenu}/>

  return (    
    <div className="application">              
        <HomeLayout left = {sidePanel} right= {feedListPanel} />
    </div>
  )
};
