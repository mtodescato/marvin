import React from 'react';
import { Section, Split, Box } from 'grommet';
import MenuStudent from '../components/student/MenuStudentComponent';
import MainPanel from '../containers/student/MainPanel';
import MarvinHeader from '../containers/shared/MarvinHeader';
import MarvinFooter from '../containers/shared/MarvinFooter';

const Student = () => (
  <div className="Student">
    <MarvinHeader title="Student Dashboard" />
    <Section pad="none">
      <Split flex="right">
        <Box
          colorIndex="light-2"
          justify="center"
          align="center"
        >
          <MenuStudent />
        </Box>
        <Box >
          <MainPanel />
        </Box>
      </Split>
    </Section>
    <MarvinFooter />
  </div>
);

export default Student;
