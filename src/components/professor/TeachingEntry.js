import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionPanel } from 'grommet';
import ExamsTeaching from '../../containers/professor/ExamsTeaching';

const TeachingEntry = props => (
  <Accordion>
    <AccordionPanel
      pad="none"
      heading={`${props.index + 1}.  ${props.name} - ${props.course}`}
    >
      <ExamsTeaching teachingAddress={props.address} />
    </AccordionPanel>
  </Accordion>
);


TeachingEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default TeachingEntry;
