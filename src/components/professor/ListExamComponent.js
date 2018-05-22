import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import ListExamEntry from './ListExamEntry';

const ListExamComponent = ({ size, exams }) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box
      className="PanelHeader"
      direction="row"
      justify="start"
      align="center"
      separator="bottom"
    >
      <FormNextLinkIcon />
      <Label>
        Manage Exams
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        Manage Exams
      </Heading>
    </Box>

    <Box
      className="infoBox"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Exams found: {size}
      </Heading>

      <Heading tag="h5" >
        This page displays the list of the exams of the teachings of which you are the
        reference professor.
        In order to see and manage marks of the enrolled students click on the icon alongside
        each exam entry.
      </Heading>
    </Box>

    {
          exams.map((element, index) => (
            <ListExamEntry
              index={index}
              {...element}
            />
          ))
        }
  </Box>
);

ListExamComponent.propTypes = {
  exams: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListExamComponent;
