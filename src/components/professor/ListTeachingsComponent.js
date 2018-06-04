import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Animate } from 'grommet';
import TeachingEntry from './TeachingEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListTeachingsComponent = ({
  size,
  teachings,
  initialize,
  statusListTeachingRequest,
}) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
      <Heading tag="h2" strong>
          List Teachings
      </Heading>
    </Box>

    <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Teachings found: {size}
      </Heading>

      <Heading tag="h5" >
        This page displays the list of the teachings of which you are the professor in charge.
        In order to see the exams available click on the icon alongside each teaching entry.
      </Heading>
    </Box>

    {statusListTeachingRequest === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        {
          teachings.map((element, index) => (
            <TeachingEntry
              key={[element.address]}
              index={index}
              {...element}
            />
          ))
        }
      </Animate>
      : <MetamaskStatus
        status={statusListTeachingRequest}
        tryAgainRequest={initialize}
        initializeValue="2018"
      />
      }
  </Box>
);

ListTeachingsComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListTeachingRequest: PropTypes.string.isRequired,
  teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListTeachingsComponent;
