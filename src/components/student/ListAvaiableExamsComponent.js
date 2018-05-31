import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate } from 'grommet';
import ExamApplicationEntry from './ExamApplicationEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListAvaiableExamsComponent = ({
  initialize,
  statusExamsInfo,
  size,
  examsEntries,
  subscribeToExam,
}) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
      <Heading tag="h2" strong>
        Exam Session
      </Heading>
    </Box>

    <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h5" >
        This page displays the list of the exams of the course of which you are the
        enrolled.
        In order to sign up for an exam click on the ‘Subscribe’ button alongside
        each exam entry.
      </Heading>
    </Box>

    <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Exams avaiable: {size}
      </Heading>
    </Box>

    {statusExamsInfo === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        <Table
          responsive
          selectable
        >
          <TableHeader labels={['#', 'Name', 'Date', 'Subscribe']} />
          <tbody>
            {
              examsEntries.map((element, index) => (
                <ExamApplicationEntry
                  key={[element.address]}
                  index={index}
                  {...element}
                  subscribeToExam={subscribeToExam}
                />
              ))
            }
          </tbody>
        </Table>
      </Animate>
    : <MetamaskStatus
      status={statusExamsInfo}
      tryAgainRequest={initialize}
    />
    }
  </Box>
);

ListAvaiableExamsComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusExamsInfo: PropTypes.string.isRequired,
  examsEntries: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
};

export default ListAvaiableExamsComponent;

