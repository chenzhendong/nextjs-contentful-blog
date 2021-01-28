import { HomeLayout } from 'components/HomeLayout';
import { getCategories, getPeople } from 'lib/data-contentful';
import { GetServerSideProps } from 'next';

type Props = {
  people: string,
  categories: string
}

function Home( props: Props)  {   
  return (    
    <div className="application">      
        {/* <FeedsList posts={ posts } /> */}
        <HomeLayout people={props.people} categories={props.categories} />
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const p = await getPeople();  
  const c = await getCategories();
  
  return { props: {people: p, categories: c} };
}

export default Home;