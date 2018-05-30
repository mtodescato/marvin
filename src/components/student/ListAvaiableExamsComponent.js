import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Label, Animate } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import ExamApplicationEntry from './ExamApplicationEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListAvaiableExamsComponent = ({
  initialize,
  statusExamsInfo,
  size,
  examsEntries,
  subscribeToExam,
}) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        Booking Exams
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
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

