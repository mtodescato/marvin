import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate } from 'grommet';
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

        <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h4" >
            Exams avaiable: {this.props.size}
          </Heading>
        </Box>

        {this.props.statusExamsInfo === 'RESOLVED' ?
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
                  this.props.examsEntries.map((element, index) => (
                    <ExamApplicationEntry
                      key={[element.address]}
                      index={index}
                      {...element}
                      subscribeToExam={this.props.subscribeToExam}
                      setStatus={this.setStatus}
                    />
                  ))
                }
              </tbody>
            </Table>
          </Animate>
        : <MetamaskStatus
          status={this.props.statusExamsInfo}
          tryAgainRequest={this.props.initialize}
        />
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

