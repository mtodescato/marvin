import React from 'react';
import { Header, Image, Box } from 'grommet';
import uniwebLogo from '../images/unipd.png';
import marvinLogo from '../images/marvin_logo.png';

const HeaderComponent = () => (
  <div>
    <Header>
      <Box pad="small"><Image src={marvinLogo} size="small" /></Box>
      <Box pad="small"><Image src={uniwebLogo} size="thumb" /></Box>
    </Header>
  </div>
);

export default HeaderComponent;
