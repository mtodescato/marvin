import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate } from 'grommet';
import StudentEntry from './StudentEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListStudentsComponent = ({
  initialize,
  statusListStudentRequest,
  size,
  examsResults,
  examAddress,
  publishMark,
}) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Enrolled students: {size}
      </Heading>
    </Box>

    {statusListStudentRequest === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        <Table
          responsive
        >
          <TableHeader labels={['#', 'Social Number', 'Name', 'Surname', 'Publish mark']} />
          <tbody>
            {
              examsResults.map((element, index) => (
                <StudentEntry
                  key={[element.address]}
                  index={index}
                  {...element}
                  examAddress={examAddress}
                  publishMark={publishMark}
                />
              ))
            }
          </tbody>
        </Table>
      </Animate>
    : <MetamaskStatus
      status={statusListStudentRequest}
      tryAgainRequest={initialize}
      initializeValue={examAddress}
    />
    }
  </Box>
);

ListStudentsComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListStudentRequest: PropTypes.string.isRequired,
  examAddress: PropTypes.string.isRequired,
  examsResults: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    serial: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  publishMark: PropTypes.func.isRequired,
};

export default ListStudentsComponent;

