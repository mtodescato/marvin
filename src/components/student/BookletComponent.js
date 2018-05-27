import React from 'react';
import Table from 'grommet/components/Table';
import { Image, Section, Animate, Button } from 'grommet';
import PropTypes from 'prop-types';
import ExamEntry from './ExamEntry';
import loading from '../../images/loading.gif';
import notFound from '../../images/404.gif';

class BookletComponent extends React.Component {
  componentWillMount() {
    this.props.bookletInfoRequest();
  }
  render() {
    switch (this.props.status) {
      case 'RESOLVED':
        return (
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
        );
      case 'PENDING':
        return (
          <Section
            align="center"
          >
            <Image src={loading} size="medium" />
            <h3>Request sent ...</h3>
          </Section>
        );
      case 'ERRORED':
        return (
          <Section
            align="center"
          >
            <Image src={notFound} size="large" />
            <Button onClick={() => this.props.bookletInfoRequest()} label="Try again" />
          </Section>
        );
      default:
        return (
          <Section
            align="center"
          >
            <Image src={notFound} size="large" />
            <Button onClick={() => this.props.bookletInfoRequest()} label="Try again" />
          </Section>
        );
    }
  }
}

BookletComponent.propTypes = {
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
