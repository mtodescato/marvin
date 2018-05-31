import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Search, Animate } from 'grommet';
import CourseEntry from './CourseEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListStudyCoursesComponent = ({
  initialize,
  statusCoursesInfo,
  activeCourseName,
  size,
  coursesEntries,
  subscribeToCourse,
  statusSubscribeRequest,
}) => (
  <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
    <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
      <Heading tag="h2" strong>
        Course Application
      </Heading>
    </Box>

    <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
      <Heading tag="h4" >
        Courses found: {size}
      </Heading>
      <Heading tag="h5" >
          Filter courses by Academic Year :
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="2018"
        onDOMChange={e => initialize(e.target.value)}
      />
    </Box>
    { statusSubscribeRequest}
    {statusCoursesInfo === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        <Table
          responsive
          selectable
        >
          <TableHeader labels={['#', 'Name', 'President', 'Type', 'Subscribe']} />
          <tbody>
            {
              coursesEntries.map((element, index) => (
                <CourseEntry
                  key={[element.ID]}
                  index={index}
                  {...element}
                  activeCourseName={activeCourseName}
                  subscribeToCourse={subscribeToCourse}
                />
              ))
            }
          </tbody>
        </Table>
      </Animate>
    : <MetamaskStatus
      status={statusCoursesInfo}
      tryAgainRequest={initialize}
      initializeValue="2018"
    />
    }
  </Box>
);

ListStudyCoursesComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusCoursesInfo: PropTypes.string.isRequired,
  statusSubscribeRequest: PropTypes.string.isRequired,
  coursesEntries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    president: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    ID: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
  activeCourseName: PropTypes.string.isRequired,
};

export default ListStudyCoursesComponent;

