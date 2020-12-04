import React from 'react';

import Container from 'components/Container';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()}, Nothing to see here...yet.</p>
      </Container>
    </footer>
  );
};

export default Footer;