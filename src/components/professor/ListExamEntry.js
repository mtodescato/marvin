import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionPanel } from 'grommet';
import ListStudents from '../../containers/professor/ListStudents';

const ListExamEntry = props => (
  <Accordion>
    <AccordionPanel
      pad="none"
      heading={`${props.index + 1}. ${props.name} - ${props.date} - ${props.ID}`}
    >
      <ListStudents address={props.examAddress} />
    </AccordionPanel>
  </Accordion>
);

ListExamEntry.propTypes = {
  index: PropTypes.number.isRequired,
  ID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  examAddress: PropTypes.string.isRequired,
};

export default ListExamEntry;
