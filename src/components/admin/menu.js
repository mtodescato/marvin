import React from 'react';
import { Sidebar, Header, Box } from 'grommet';
import MenuAdmin from '../../containers/admin/MenuAdmin';

const Menu = () => (
  <Sidebar
    fixed
    full="false"
    margin={{ vertical: 'none' }}
    pad={{ vertical: 'none', horizontal: 'small' }}
  >
    <Header>
        Admin Menù
    </Header>
    <Box
      flex="grow"
      justify="start"
    >
      <MenuAdmin />
    </Box>
  </Sidebar>
);

export default Menu;
