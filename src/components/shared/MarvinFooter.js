import React from 'react';
import { Footer, Image, Box, Menu, Anchor, Paragraph } from 'grommet';
// import uniwebLogo from '../../images/unipd.png';
import marvinLogo from '../../images/marvin_logo.png';

const MarvinFooter = () => (
  <div>
    <Footer
      justify="center"
      size="medium"
    >
      <Box pad="small"><Image src={marvinLogo} size="small" /></Box>
      <Box
        direction="row"
        align="center"
        pad={{ between: 'medium' }}
      >
        <Paragraph margin="none">
            ©2018 NOVE Group
        </Paragraph>
        <Menu
          direction="row"
          size="small"
          dropAlign={{ right: 'right' }}
        >
          <Anchor href="#">
        Support
          </Anchor>
          <Anchor href="#">
        Contact
          </Anchor>
          <Anchor href="#">
        About
          </Anchor>
        </Menu>
      </Box>
    </Footer>
  </div>
);

export default MarvinFooter;
