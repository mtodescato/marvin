import React from 'react';
import { Box, Table, TableHeader, Heading, Search, Label, Animate } from 'grommet';
import PropTypes from 'prop-types';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CourseEntry from './CourseEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListCoursesComponent = ({
  initialize,
  statusListCoursesRequest,
  size,
  coursesEntries,
}) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        List Study Courses
      </Heading>
    </Box>

    <Box
      className="infoBox"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h5" >
        This page displays the list of the courses in the system.
        In order to see specific course details you can filter them by academic year.
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Courses found: {size}
      </Heading>
      <Heading tag="h5" >
        Filter courses by Academic Year:
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="2018"
        onDOMChange={(e) => {
          e.preventDefault();
          initialize(e.target.value);
        }}
      />
    </Box>
    {statusListCoursesRequest}
    {statusListCoursesRequest === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        <Table
          responsive
          selectable
        >
          <TableHeader labels={['#', 'Name', 'President', 'Type', 'Address']} />
          <tbody>
            {
              coursesEntries.map((element, index) => (
                <CourseEntry
                  key={[element.ID]}
                  index={index}
                  {...element}
                />
              ))
            }
          </tbody>
        </Table>
      </Animate>
        : <MetamaskStatus
          status={statusListCoursesRequest}
          tryAgainRequest={initialize}
          initializeValue="2018"
        />
        }
  </Box>
);

ListCoursesComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListCoursesRequest: PropTypes.string.isRequired,
  coursesEntries: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    president: PropTypes.string.isRequired,
    courseType: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListCoursesComponent;
