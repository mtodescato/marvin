import React from 'react';
import { Footer, Image, Box, Menu, Anchor, Paragraph } from 'grommet';
// import uniwebLogo from '../../images/unipd.png';
import marvinLogo from '../../images/marvin_logo.png';

const MarvinFooter = () => (
  <Footer
    justify="center"
    size="medium"
    colorIndex="light-2"
    separator="horizontal"
  >
    <Box
      direction="row"
      align="center"
      pad={{ horizontal: 'medium', between: 'medium', vertical: 'small' }}
    >
      <Image src={marvinLogo} size="small" />
      <Paragraph margin="none">
            ©2018 NOVE Group
      </Paragraph>
      <Menu
        direction="row"
        size="small"
        dropAlign={{ right: 'right' }}
      >
        <Anchor href="#">
          Contact
        </Anchor>
        <Anchor href="#">
          About
        </Anchor>
      </Menu>
    </Box>
  </Footer>
);

export default MarvinFooter;
