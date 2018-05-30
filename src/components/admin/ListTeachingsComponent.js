import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Search, Animate } from 'grommet';
import TeachingEntry from './TeachingEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListTeachingsComponent = ({
  initialize,
  statusListTeachingsRequest,
  size,
  teachings,
}) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >

    <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
      <Heading tag="h2" strong>
          List Teachings
      </Heading>
    </Box>

    <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h5" >
        This page displays the list of the teachings in the system.
        In order to see a specific teaching details you can filter them by academic year.
      </Heading>
    </Box>

    <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Teachings found: {size}
      </Heading>
      <Heading tag="h5" >
        Filter teachings by year:
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="2018"
        onDOMChange={(e) => { initialize(e.target.value); }}
      />
    </Box>
    {statusListTeachingsRequest === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        <Table
          responsive
          selectable
        >
          <TableHeader labels={['#', 'Teaching', 'Course', 'Professor in charge']} />
          <tbody>
            {
              teachings.map((element, index) => (
                <TeachingEntry
                  key={[element.address]}
                  index={index}
                  {...element}
                />
              ))
            }
          </tbody>
        </Table>
      </Animate>
    : <MetamaskStatus
      status={statusListTeachingsRequest}
      tryAgainRequest={initialize}
      initializeValue="2018"
    />
    }
  </Box>
);

ListTeachingsComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListTeachingsRequest: PropTypes.string.isRequired,
  teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListTeachingsComponent;
