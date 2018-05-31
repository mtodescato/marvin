import React from 'react';
import { Section, Split, Box } from 'grommet';
import MenuProfessor from '../containers/professor/MenuProfessor';
import MainPanel from '../containers/professor/MainPanel';
import MarvinHeader from '../containers/shared/MarvinHeader';
import MarvinFooter from '../components/shared/MarvinFooter';

const Professor = () => (
  <div className="Professor">
    <MarvinHeader title="Professor Dashboard" />
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
          <MenuProfessor />
        </Box>
        <Box >
          <MainPanel />
        </Box>
      </Split>
    </Section>
    <MarvinFooter />
  </div>
);
export default Professor;
