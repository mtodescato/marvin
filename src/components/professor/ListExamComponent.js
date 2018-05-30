import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Animate } from 'grommet';
import ListExamEntry from './ListExamEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListExamComponent = ({
  initialize,
  statusListExamsRequest,
  size,
  exams,
}) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
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

    {statusListExamsRequest === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        {
          exams.map((element, index) => (
            <ListExamEntry
              key={[element.examAddress]}
              index={index}
              {...element}
            />
          ))
        }
      </Animate>
    : <MetamaskStatus
      status={statusListExamsRequest}
      tryAgainRequest={initialize}
      initializeValue="2018"
    />
    }
  </Box>
);

ListExamComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListExamsRequest: PropTypes.string.isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    examAddress: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListExamComponent;
