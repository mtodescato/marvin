import React from 'react';
import { Footer, Box, Paragraph } from 'grommet';

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
      pad={{ horizontal: 'medium', between: 'medium', vertical: 'none' }}
    >
      <Paragraph margin="none">
            ©2018 Marvin by NOVE Group
      </Paragraph>
    </Box>
  </Footer>
);

export default MarvinFooter;
