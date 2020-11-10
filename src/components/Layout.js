import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'assets/stylesheets/application.scss';

// Hook with graphql query for site settings stored in GraphCMS
import useSiteSettings from '../hooks/use-siteSettings'

import Header from 'components/Header';
import Footer from 'components/Footer';
import Nav from 'components/Nav'

const Layout = ({ children, pageName }) => {

  const settings = useSiteSettings();
 
  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className}}>
        <title>{settings.siteTitle}</title>
      </Helmet>
      <div className="wrapper">
        <Header settings={settings}/>
        <Nav />
        <main>{ children }</main>
      </div>
      <Footer />
    </>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;