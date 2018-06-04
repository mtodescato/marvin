import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate } from 'grommet';
import StudentEntry from './StudentEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';
import TransactionStatus from '../../components/shared/TransactionStatus';

class ListStudentsComponent extends React.Component {
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

        {this.state.showStatus ? <TransactionStatus setStatus={this.setStatus} /> : null }

        <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h4" >
            Enrolled students: {this.props.size}
          </Heading>
        </Box>

        <Box
          className="tableBox"
          colorIndex="light-2"
          separator="horizontal"
          pad="small"
          align="center"
          alignSelf="center"
        >
          {this.props.statusListStudentRequest === 'RESOLVED' ?
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
                    this.props.examsResults.map((element, index) => (
                      <StudentEntry
                        key={[element.address]}
                        index={index}
                        {...element}
                        examAddress={this.props.examAddress}
                        publishMark={this.props.publishMark}
                      />
                    ))
                  }
                </tbody>
              </Table>
            </Animate>
          : <MetamaskStatus
            status={this.props.statusListStudentRequest}
            tryAgainRequest={this.props.initialize}
            initializeValue={this.props.examAddress}
          />
          }
        </Box>
      </Box>
    );
  }
}

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

