import React from 'react';
import { Section, Split, Box } from 'grommet';
import MenuAdmin from '../containers/admin/MenuAdmin';
import MainPanel from '../containers/admin/MainPanelAdmin';
import MarvinHeader from '../containers/shared/MarvinHeader';
import MarvinFooter from '../components/shared/MarvinFooter';


const Admin = () => (
  <div className="Admin">
    <MarvinHeader title="Admin Dashboard" />
    <Box className="Admin">
      <Section pad="none">
        <Split
          flex="right"
          fixed
        >
          <Box
            colorIndex="light-2"
            justify="center"
            align="center"
            separator="vertical"
          >
            <MenuAdmin />
          </Box>
          <Box>
            <MainPanel />
          </Box>
        </Split>
      </Section>
    </Box>
    <MarvinFooter />
  </div>
);

export default Admin;
