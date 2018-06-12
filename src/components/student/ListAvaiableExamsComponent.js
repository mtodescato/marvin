import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate, Label } from 'grommet';
import Alert from 'grommet/components/icons/base/Alert';
import ExamApplicationEntry from './ExamApplicationEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';
import TransactionStatus from '../../components/shared/TransactionStatus';

class ListAvaiableExamsComponent extends React.Component {
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
            Exam Session
          </Heading>
        </Box>

        <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h5" >
            This page displays the list of the exams of the study courses of which you are the
            enrolled.
            In order to sign up for an exam click on the ‘Subscribe’ button alongside
            each exam entry.
          </Heading>
        </Box>

        {this.state.showStatus ? <TransactionStatus setStatus={this.setStatus} /> : null }

        {this.props.statusExamsInfo === 'RESOLVED' ?
          <Animate
            enter={{ animation: 'fade', duration: 1000, delay: 0 }}
            keep
          >
            <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
              <Heading tag="h4" >
                Exams avaiable: {this.props.size}
              </Heading>
            </Box>
            <Table
              responsive
              selectable
            >
              <TableHeader labels={['#', 'Name', 'Date', 'Subscribe']} />
              <tbody>
                { this.props.size !== 0 ?
                  this.props.examsEntries.map((element, index) => (
                    <ExamApplicationEntry
                      key={[element.address]}
                      index={index}
                      {...element}
                      subscribeToExam={this.props.subscribeToExam}
                      setStatus={this.setStatus}
                    />
                  ))
                  : <tr><td colSpan="5" align="justify">No results found.</td></tr>
                }
              </tbody>
            </Table>
          </Animate>
        : null
        }
        {this.props.statusExamsInfo === 'ERRORED' ?
          <Animate
            enter={{ animation: 'fade', duration: 1000, delay: 0 }}
            keep
          >
            <Box colorIndex="warning" direction="row" pad="none" margin="small">
              <Box direction="row" pad={{ vertical: 'small', horizontal: 'small' }} margin="none">
                <Alert />
              </Box>
              <Box flex direction="column" margin={{ top: 'none' }} pad={{ vertical: 'small', horizontal: 'none', between: 'none' }}>
                <Label size="medium" margin="none">
                    Oops! Seems like you are not enrolled in any study course.
                </Label>
                <Label size="small" margin="none">
                    In order to have access to all the features of your private area such
                    as ‘Booklet’ or ‘Exam Session’ you have
                    to sign up for the study course in which you want to graduate
                    on the ‘Course Application’ section.
                </Label>
              </Box>
            </Box>
          </Animate>
        : null
        }
        { this.props.statusExamsInfo === 'PENDING' ?
          <MetamaskStatus
            status={this.props.statusExamsInfo}
            tryAgainRequest={this.props.initialize}
          /> : null
        }
      </Box>
    );
  }
}

ListAvaiableExamsComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusExamsInfo: PropTypes.string.isRequired,
  examsEntries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
};

export default ListAvaiableExamsComponent;

