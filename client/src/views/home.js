import React from 'react';
import Banner from '../components/banner';
import CategoriesCard from '../components/categories-card';
import Footer from '../components/footer';
import Hero from '../components/hero';

function Home() {
  return (
    <>
      <Hero />
      <CategoriesCard />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
