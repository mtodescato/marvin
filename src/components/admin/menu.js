import React from 'react';
import { Menu as MenuGrommet, Sidebar, Header, Box } from 'grommet';
import MenuAdmin from '../../containers/admin/menuAdmin';

const Menu = () => (
  <Sidebar
    fixed
    pad="medium"
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
