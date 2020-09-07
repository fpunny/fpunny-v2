import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '../ThemeProvider';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Seo from '../Seo';
import '../../scss/index.scss';

export default function Layout({ children, title, lang }) {
  return (
    <ThemeProvider>
      <main>
        <Seo title={title} lang={lang} />
        <Navigation />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  ...Seo.propTypes,
};
