import React from 'react';
import { Menu as MenuGrommet, Sidebar, Header, Box } from 'grommet';
import MenuAdmin from '../../containers/admin/menuAdmin';
import { Section, Heading, Accordion, AccordionPanel } from 'grommet';

const Menu = () => (
  <Section fixed pad="medium" >
    <Heading tag="h3">
      Admin Menù
    </Heading>
    <MenuGrommet>
        <MenuAdmin />
    </MenuGrommet>
  </Section>
);

export default Menu;
