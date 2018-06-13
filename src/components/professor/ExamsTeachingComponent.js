import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate } from 'grommet';
import ExamEntry from './ExamEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ExamsTeachingComponent = ({
  initialize,
  statusListExamsRequest,
  initializeValue,
  size,
  exams,
}) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Exams found: {size}
      </Heading>
    </Box>
    <Box
      className="tableBox"
      size="xlarge"
      colorIndex="light-2"
      separator="horizontal"
      pad="small"
      align="center"
      alignSelf="center"
    >
      {statusListExamsRequest === 'RESOLVED' ?
        <Animate
          enter={{ animation: 'fade', duration: 1000, delay: 0 }}
          keep
        >
          <Table
            responsive
            selectable
          >
            <TableHeader labels={['#', 'Address', 'Date']} />
            <tbody>
              { this.size !== 0 ?
                exams.map((element, index) => (
                  <ExamEntry
                    key={[element.address]}
                    index={index}
                    {...element}
                  />
                ))
                : <tr><td colSpan="5" align="justify">No results found.</td></tr>
            }
            </tbody>
          </Table>
        </Animate>
    : <MetamaskStatus
      status={statusListExamsRequest}
      tryAgainRequest={initialize}
      initializeValue={initializeValue}
    />
    }
    </Box>
  </Box>
);

ExamsTeachingComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListExamsRequest: PropTypes.string.isRequired,
  initializeValue: PropTypes.string.isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ExamsTeachingComponent;
