import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading, Search, Label, Animate } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CourseEntry from './CourseEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const ListStudyCoursesComponent = ({
  status,
  activeCourseName,
  size,
  coursesEntries,
  subscribeToCourse,
  initialize,
}) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box
      className="PanelHeader"
      direction="row"
      justify="start"
      align="center"
      separator="bottom"
    >
      <FormNextLinkIcon />
      <Label>
        Course application
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        Course application
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
    {status === 'RESOLVED' ?
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 0 }}
        keep
      >
        <Table
          responsive
          selectable
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>President</th>
              <th>Type</th>
              <th>Subscribe</th>
            </tr>
          </thead>
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
      status={status}
      tryAgainRequest={initialize}
      initializeValue="2018"
    />
    }
  </Box>
);

ListStudyCoursesComponent.propTypes = {
  status: PropTypes.string.isRequired,
  coursesEntries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    president: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    ID: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
  activeCourseName: PropTypes.string.isRequired,
  initialize: PropTypes.func.isRequired,
};

export default ListStudyCoursesComponent;

