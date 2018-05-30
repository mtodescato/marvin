import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate } from 'grommet';
import PendingResultEntry from './PendingResultEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListPendingResultsComponent = ({
  initialize,
  statusResultsInfo,
  size,
  examsResults,
  accept,
  reject,
}) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
      <Heading tag="h2" strong>
        Exams Results
      </Heading>
    </Box>

    <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Pending results: {size}
      </Heading>
    </Box>

    {statusResultsInfo === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        <Table
          responsive
          selectable
        >
          <TableHeader labels={['#', 'Name', 'Date', 'Result', 'Action']} />
          <tbody>
            {
              examsResults.map((element, index) => (
                <PendingResultEntry
                  key={[element.address]}
                  index={index}
                  {...element}
                  accept={accept}
                  reject={reject}
                />
              ))
            }
          </tbody>
        </Table>
      </Animate>
    : <MetamaskStatus
      status={statusResultsInfo}
      tryAgainRequest={initialize}
    />
    }
  </Box>
);

ListPendingResultsComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusResultsInfo: PropTypes.string.isRequired,
  examsResults: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    examAddress: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
};

export default ListPendingResultsComponent;

