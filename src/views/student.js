import React from 'react';
import { Section, Split, Box } from 'grommet';
import Menu from '../components/student/menu';
import MainPanel from '../containers/student/mainPanel';
import HeaderUniweb from '../containers/header';

const Student = () => (
  <div className="Student">
    <HeaderUniweb />
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
  </div>
);

export default Student;
