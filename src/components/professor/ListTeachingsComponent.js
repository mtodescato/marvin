import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import TeachingEntry from './TeachingEntry';

const ListTeachingsComponent = ({ size, teachings }) => (
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
        List Teachings
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
          List Teachings
      </Heading>
    </Box>

    <Box
      className="infoBox"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Teachings found: {size}
      </Heading>

      <Heading tag="h5" >
        This page displays the list of the teachings of which you are the reference professor.
        In order to see the exams available click on the icon alongside each teaching entry.
      </Heading>
    </Box>

    {
          teachings.map((element, index) => (
            <TeachingEntry
              key={[element.address]}
              index={index}
              {...element}
            />
          ))
        }
  </Box>
);

ListTeachingsComponent.propTypes = {
  teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListTeachingsComponent;
