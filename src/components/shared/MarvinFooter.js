import React from 'react';
import { Footer, Box, Menu, Anchor, Paragraph } from 'grommet';
// import uniwebLogo from '../../images/unipd.png';

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
      pad={{ horizontal: 'medium', between: 'medium', vertical: 'xsmall' }}
    >
      <Paragraph margin="none">
            ©2018 Marvin by NOVE Group
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
