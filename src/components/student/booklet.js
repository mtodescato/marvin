import React from 'react';
import Table from 'grommet/components/Table';
import { Image, Section, Animate, Button } from 'grommet';
import PropTypes from 'prop-types';
import ExamEntry from './examEntry';
import loading from '../../images/loading.gif';
import notFound from '../../images/404.gif';

class BookletComponent extends React.Component {
  componentWillMount() {
    this.props.bookletInfoRequest(this.props.address);
  }
  render() {
    switch (this.props.status) {
      case 'RESOLVED':
        if (this.props.booklet.user !== undefined && this.props.booklet.exams !== undefined) {
          return (
            <Animate
              enter={{ animation: 'fade', duration: 1000, delay: 0 }}
              keep
            >
              <div>
                <h2> Welcome {this.props.booklet.user.name} {this.props.booklet.user.surname}
                  {' '} n. {this.props.booklet.user.matricola}
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
            </Animate>
          );
        }
        return (
          <Section align="center">
            <Image src={loading} size="medium" />
            <h3>Receiving data ...</h3>
          </Section>
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
            <Button onClick={this.props.bookletInfoRequest(this.props.address)} label="Try again" />
          </Section>
        );
      default:
        return (
          <Section
            align="center"
          >
            <Image src={notFound} size="large" />
            <Button onClick={this.props.bookletInfoRequest(this.props.address)} label="Try again" />
          </Section>
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
