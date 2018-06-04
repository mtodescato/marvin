import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate } from 'grommet';
import CourseEntry from './CourseEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';
import TransactionStatus from '../../components/shared/TransactionStatus';

class ListStudyCoursesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.setStatus = this.setStatus.bind(this);

    this.state = {
      showStatus: false,
    };
  }

  setStatus(e) {
    this.setState({
      showStatus: e,
    });
  }

  render() {
    return (
      <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
        <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
          <Heading tag="h2" strong>
            Course Application
          </Heading>
        </Box>

        <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h5" >
            This page displays the list of the study courses avaible in the system.
            In order to have access to all the features of your private area you have
            to sign up for the study course in which you want to graduate by clicking
            on the ‘Subscribe’ button alongside
            each study course entry.
          </Heading>
        </Box>

        {this.state.showStatus ? <TransactionStatus setStatus={this.setStatus} /> : null }

        <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h4" >
            Courses found: {this.props.size}
          </Heading>
        </Box>

        {this.props.statusCoursesInfo === 'RESOLVED' ?
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
                    this.props.coursesEntries.map((element, index) => (
                      <CourseEntry
                        key={[element.ID]}
                        index={index}
                        {...element}
                        activeCourseName={this.props.activeCourseName}
                        subscribeToCourse={this.props.subscribeToCourse}
                        setStatus={this.setStatus}
                      />
                   ))
                }
              </tbody>
            </Table>
          </Animate>
        : <MetamaskStatus
          status={this.props.statusCoursesInfo}
          tryAgainRequest={this.props.initialize}
          initializeValue="2018"
        />
        }
      </Box>
    );
  }
}

ListStudyCoursesComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusCoursesInfo: PropTypes.string.isRequired,
  // statusSubscribeRequest: PropTypes.string.isRequired,
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

