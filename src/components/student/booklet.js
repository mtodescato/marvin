import React from 'react';
import Table from 'grommet/components/Table';
import PropTypes from 'prop-types';
import ExamEntry from './examEntry';

const BookletComponent = props => (
  <div>
    <h2> Welcome {props.user.name} {props.user.surname} n. {props.user.matricola}</h2>
    <h4> Weighted Average: {props.user.media}</h4>
    <h3> Exams in your Booklet</h3>
    <Table responsive>
      <thead>
        <tr>
          <th>Year</th>
          <th>Name</th>
          <th>CFU</th>
          <th>State</th>
          <th>Result</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
          props.exams.map(element => (
            <ExamEntry {...element} />
          ))
        }
      </tbody>
    </Table>
  </div>
);

BookletComponent.propTypes = {
  user: PropTypes.arrayOf.isRequired,
  exams: PropTypes.arrayOf.isRequired,
};

export default BookletComponent;
