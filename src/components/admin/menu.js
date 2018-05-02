import React from 'react';
import { Section, Heading, Accordion } from 'grommet';
import MenuAdmin from '../../containers/admin/menuAdmin';

const Menu = () => (
  <Section fixed pad="medium" >
    <Heading tag="h3">
      Admin Menù
    </Heading>
    <Accordion>
      <MenuAdmin />
    </Accordion>
  </Section>
);

export default Menu;
