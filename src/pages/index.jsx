import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

export default function IndexPage() {
  return (
    <Layout title='Home'>
      <Landing />
      <About />
      <Skills />
      <Contact />
    </Layout>
  );
}
