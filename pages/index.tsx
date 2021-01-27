import { HomeLayout } from 'components/HomeLayout';
import { getCategories, getPerson } from 'lib/data-contentful';
import { GetServerSideProps } from 'next';

type Props = {
  person: string,
  categories: string
}

function Home( props: Props)  {    
  return (    
    <div className="application">      
        {/* <FeedsList posts={ posts } /> */}
        <HomeLayout person={props.person} categories={props.categories} />
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const p = await getPerson();  
  const c = await getCategories();
  
  return { props: {person: JSON.stringify(p), categories: JSON.stringify(c)} };
}

export default Home;