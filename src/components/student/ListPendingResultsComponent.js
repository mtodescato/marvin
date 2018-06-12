import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Animate, Label } from 'grommet';
import Alert from 'grommet/components/icons/base/Alert';
import PendingResultEntry from './PendingResultEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';
import TransactionStatus from '../../components/shared/TransactionStatus';

class ListPendingResultsComponent extends React.Component {
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
            Exams Results
          </Heading>
        </Box>

        <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h5" >
            This page displays the list of the exams with pending results of the study
            courses of which you are enrolled. In order to accept or refuse a mark just
            click on the ‘Accept’ or ‘Reject’ buttons alongside each exam entry.
          </Heading>
        </Box>

        {this.state.showStatus ? <TransactionStatus setStatus={this.setStatus} /> : null }

        {this.props.statusResultsInfo === 'RESOLVED' ?
          <Animate
            enter={{ animation: 'fade', duration: 1000, delay: 0 }}
            keep
          >
            <Box className="searchBox" size="medium" pad={{ horizontal: 'medium', vertical: 'small' }} >
              <Heading tag="h4" >
                Pending results: {this.props.size}
              </Heading>
            </Box>
            <Table
              responsive
              selectable
            >
              <TableHeader labels={['#', 'Name', 'Date', 'Result', 'Action']} />
              <tbody>
                { this.props.size !== 0 ?
                  this.props.examsResults.map((element, index) => (
                    <PendingResultEntry
                      key={[element.address]}
                      index={index}
                      {...element}
                      accept={this.props.accept}
                      reject={this.props.reject}
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

        {this.props.statusResultsInfo === 'ERRORED' ?
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
        { this.props.statusResultsInfo === 'PENDING' ?
          <MetamaskStatus
            status={this.props.statusResultsInfo}
            tryAgainRequest={this.props.initialize}
          /> : null
        }
      </Box>
    );
  }
}

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

