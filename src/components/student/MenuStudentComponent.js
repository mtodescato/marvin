import React from 'react';
import { Menu as MenuGrommet, Sidebar, Header, Box } from 'grommet';
import MenuStudent from '../../containers/student/MenuStudent';

const MenuStudentComponent = () => (
  <Sidebar
    fixed
    pad="medium"
  >
    <Header>
      Student Menù
    </Header>
    <Box
      flex="grow"
      justify="start"
    >
      <MenuGrommet
        responsive
        primary
        inline
      >
        <MenuStudent />
      </MenuGrommet>
    </Box>
  </Sidebar>
);

export default MenuStudentComponent;
