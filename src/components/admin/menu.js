import React from 'react';
import { Sidebar, Header, Box } from 'grommet';
import MenuAdmin from '../../containers/admin/menuAdmin';

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
    <MenuAdmin />
  </Sidebar>
);

export default Menu;
