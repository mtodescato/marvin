import React from 'react';
import Table from 'grommet/components/Table';
import { Box, Animate, Heading } from 'grommet';
import PropTypes from 'prop-types';
import ExamEntry from './ExamEntry';
import MetamaskStatus from '../../components/shared/MetamaskStatus';

class BookletComponent extends React.Component {
  componentWillMount() {
    this.props.bookletInfoRequest();
  }
  render() {
    return (
      <Box
        className="PanelBox"
        direction="column"
        margin="small"
        separator="bottom"
      >
        <Box className="titleBox" align="center" alignSelf="center" colorIndex="brand" full="horizontal" >
          <Heading tag="h2" strong>
            Booklet
          </Heading>
        </Box>

        <Box
          className="infoBox"
          pad={{ horizontal: 'medium', vertical: 'small' }}
        >
          <Heading tag="h5" >
          This page displays the list of the users registered in the system.
          In order to manage the users you can filter them by their unique address
          or based on their role. TODO
          </Heading>
        </Box>

        {this.props.status === 'RESOLVED' ?
          <Animate
            enter={{ animation: 'fade', duration: 1000, delay: 0 }}
            keep
          >
            <div>
              <h2> Welcome {this.props.user.name} {this.props.user.surname}
                {' '} n. {this.props.user.matricola}
              </h2>
              <h3> Exams in your Booklet</h3>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Referent</th>
                    <th>Name</th>
                    <th>State</th>
                    <th>Result</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
        this.props.exams.map(element => (
          <ExamEntry {...element} />
        ))
      }
                </tbody>
              </Table>
            </div>

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
