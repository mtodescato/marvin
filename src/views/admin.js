import React from 'react';
import { Section, Split, Box } from 'grommet';
import Menu from '../components/admin/menu';
import MainPanel from '../containers/admin/mainPanelAdmin';


const Admin = () => (
  <Box className="Admin">
    <Section pad='none'>
      <Split flex="right">
        <Box
          colorIndex="light-2"
          justify="center"
          align="center"
        >
          <Menu />
        </Box>
        <Box
          
          >
          <MainPanel />
        </Box>
      </Split>
    </Section>
  </Box>
);

export default Admin;
