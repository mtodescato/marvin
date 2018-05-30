import React from 'react';
import Table from 'grommet/components/Table';
import { Box, Animate, Heading, List, ListItem, TableHeader } from 'grommet';
import PropTypes from 'prop-types';
import ExamEntry from './ExamEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

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
            This page shows the user information and the academic activities in the student’s
            booklet. In the case of
            activities not yet passed and attended, just click ‘Exam Session’ in the menu entry
            that provides access to the list of the exam sessions.
          </Heading>
        </Box>

        <Box
          className="studentInfoBox"
          alignSelf="center"
          pad={{ vertical: 'none', horizontal: 'none' }}
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
                TODO
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
                TODO
              </Heading>
            </ListItem>

          </List>
        </Box>

        { /* this.props.activeCourse ? TODO deve iscriversi al corso prima
        di accedere al booklet bla bla bla */}

        {this.props.status === 'RESOLVED' ?
          <Animate
            enter={{ animation: 'fade', duration: 1000, delay: 0 }}
            keep
          >
            <Table responsive>
              <TableHeader labels={['Professor in charge', 'Academic Activities', 'Status', 'Grade', 'Date']} />
              <tbody>
                {
                  this.props.exams.map(element => (
                    <ExamEntry {...element} />
                  ))
                }
              </tbody>
            </Table>

          </Animate>
      : <MetamaskStatus
        status={this.props.status}
        tryAgainRequest={this.props.initialize}
        // initializeValue="2018"
      />
      }
      </Box>
    );
  }
}

BookletComponent.propTypes = {
  initialize: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    matricola: PropTypes.string.isRequired,
  }).isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string.isRequired,
    responsabile: PropTypes.string.isRequired,
    stato: PropTypes.string.isRequired,
    voto: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
  })).isRequired,
  bookletInfoRequest: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default BookletComponent;
