import React from 'react';
import { Section, Split, Box } from 'grommet';
import Menu from '../components/admin/menu';
import MainPanel from '../containers/admin/MainPanelAdmin';
import MarvinHeader from '../containers/shared/MarvinHeader';
import MarvinFooter from '../containers/shared/MarvinFooter';


const Admin = () => (
  <div className="Admin">
    <MarvinHeader />
    <Box className="Admin">
      <Section pad="none">
        <Split flex="right">
          <Box
            colorIndex="light-2"
            justify="center"
            align="center"
          >
            <Menu />
          </Box>
          <Box >
            <MainPanel />
          </Box>
        </Split>
      </Section>
    </Box>
    <MarvinFooter />
  </div>
);

export default Admin;
