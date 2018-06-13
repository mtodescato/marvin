import React from 'react';
import Table from 'grommet/components/Table';
import { Box, Animate, Heading, List, ListItem, TableHeader, Label, Legend } from 'grommet';
import Alert from 'grommet/components/icons/base/Alert';
import PropTypes from 'prop-types';
import ExamEntry from './ExamEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

const legendEntries = [
  {
    label: 'Passed', colorIndex: 'ok',
  }, {
    label: 'Attended', colorIndex: 'warning',
  }, {
    label: 'Planned', colorIndex: 'critical',
  }];


class BookletComponent extends React.Component {
  componentWillMount() {
    this.props.bookletInfoRequest();
  }
  render() {
    return (
      <Box className="PanelBox" direction="column" margin="small" separator="bottom" >
        <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
          <Heading tag="h2" strong>
            Booklet
          </Heading>
        </Box>

        <Box className="infoBox" pad={{ horizontal: 'medium', vertical: 'small' }} >
          <Heading tag="h4" >
            This page shows the user informations and the academic activities in the student’s
            booklet. In the case of
            activities not yet passed and attended, just click ‘Exam Session’ in the menu entry
            that provides access to the list of the exam sessions.
          </Heading>
        </Box>

        {this.props.status === 'RESOLVED' ?
          <Box pad="none" margin="none">
            <Box
              className="studentInfoBox"
              alignSelf="center"
              pad={{ vertical: 'none', horizontal: 'none' }}
              margin={{ bottom: 'medium' }}
              colorIndex="light-2"
              separator="all"
              size="large"
            >
              <List >
                <ListItem
                  justify="between"
                  separator="bottom"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                  margin="none"
                >
                  <Heading tag="h4" margin="none" strong>
                        First Name:
                  </Heading>
                  <Heading tag="h4" margin="none">
                    {this.props.user.name}
                  </Heading>
                </ListItem>

                <ListItem
                  justify="between"
                  separator="bottom"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                  margin="none"
                >
                  <Heading tag="h4" margin="none" strong>
                    Surname:
                  </Heading>
                  <Heading tag="h4" margin="none">
                    {this.props.user.surname}
                  </Heading>
                </ListItem>

                <ListItem
                  justify="between"
                  separator="bottom"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                  margin="none"
                >
                  <Heading tag="h4" margin="none" strong>
                    Social number:
                  </Heading>
                  <Heading tag="h4" margin="none">
                    {this.props.user.matricola}
                  </Heading>
                </ListItem>

                <ListItem
                  justify="between"
                  separator="bottom"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                  margin="none"
                >
                  <Heading tag="h4" margin="none" strong>
                    Address:
                  </Heading>
                  <Heading tag="h4" margin="none">
                    {this.props.user.address}
                  </Heading>
                </ListItem>

                <ListItem
                  justify="between"
                  separator="none"
                  pad={{ vertical: 'none', horizontal: 'small', between: 'medium' }}
                  margin="none"
                >
                  <Heading tag="h4" margin="none" strong>
                    Study Course:
                  </Heading>
                  <Heading tag="h4" margin="none">
                    {this.props.activeCourseName.name}
                  </Heading>
                </ListItem>

              </List>
            </Box>

            <Animate
              enter={{ animation: 'fade', duration: 1000, delay: 0 }}
              keep
            >
              <Table responsive>
                <TableHeader labels={['Professor in charge', 'Academic Activities', 'Status', 'Grade', 'Date']} />
                <tbody>
                  {
                    this.props.exams.map(element => (
                      <ExamEntry {...element} key={[element.nome]} />
                    ))
                  }
                </tbody>
              </Table>

              <Box
                className="legendBox"
                margin={{ horizontal: 'medium', bottom: 'medium' }}
                pad="small"
                separator="top"
              >
                <Legend
                  series={legendEntries}
                  total={false}
                  size="medium"
                />
              </Box>

            </Animate>
          </Box>
      : null
      }
        {this.props.status === 'ERRORED' ?
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
        { this.props.status === 'PENDING' ?
          <MetamaskStatus
            status={this.props.status}
            tryAgainRequest={this.props.initialize}
          /> : null
        }
      </Box>
    );
  }
}

BookletComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  activeCourseName: PropTypes.PropTypes.shape({
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    matricola: PropTypes.string.isRequired,
  }).isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string.isRequired,
    responsabile: PropTypes.string.isRequired,
    stato: PropTypes.string.isRequired,
    voto: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  })).isRequired,
  bookletInfoRequest: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default BookletComponent;
