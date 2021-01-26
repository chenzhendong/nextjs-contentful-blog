import { HomeLayout } from 'components/HomeLayout';

type Props = {
  posts: string
}

function Home( )  {
  return (    
    <div className="application">      
        {/* <FeedsList posts={ posts } /> */}
        <HomeLayout />
    </div>
  )
};

export default Home;