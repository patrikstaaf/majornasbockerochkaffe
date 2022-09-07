import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import sanityClient from '../sanityClient';

const Home: NextPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Navbar />
      {data && <h1>{data._id}</h1>}
      <SearchInput />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(`*[_type == "post"]`);

  return {
    props: { data },
  };
};

export default Home;
