import React from 'react';
import Table from 'grommet/components/Table';
import { Image, Section } from 'grommet';
import PropTypes from 'prop-types';
import ExamEntry from './examEntry';
import Loading from '../../images/loading.gif';

class BookletComponent extends React.Component {
  componentWillMount() {
    // this.props.bookletInfoRequest(this.props.address);
  }
  render() {
    switch (this.props.status) {
      case 'RESOLVED':
        return (
          <div>
            <h2> Welcome {this.props.booklet.user.name} {this.props.booklet.user.surname}
        n. {this.props.booklet.user.matricola}
            </h2>
            <h4> Weighted Average: {this.props.booklet.user.media}</h4>
            <h3> Exams in your Booklet</h3>
            <Table responsive>
              <thead>
                <tr>
                  <th>Referent</th>
                  <th>Name</th>
                  <th>CFU</th>
                  <th>State</th>
                  <th>Result</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {
            this.props.booklet.exams.map(element => (
              <ExamEntry {...element} />
            ))
          }
              </tbody>
            </Table>
          </div>
        );
      case 'PENDING':
        return (
          <Section
            align="center"
          >
            <Image src={Loading} size="medium" />
          </Section>
        );
      case 'ERRORED':
        return (
          <div>
          ERROR
          </div>
        );
      default:
        return (
          <div>
            ERROR
          </div>
        );
    }
  }
}

BookletComponent.propTypes = {
  booklet: PropTypes.arrayOf.isRequired,
  bookletInfoRequest: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default BookletComponent;
