import React from 'react';

import Container from 'components/Container';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()}, My Gatsby Site</p>
      </Container>
    </footer>
  );
};

export default Footer;