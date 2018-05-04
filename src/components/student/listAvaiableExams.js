import React from 'react';
import Table from 'grommet/components/Table';
import PropTypes from 'prop-types';
import ExamApplicationEntry from './examApplicationEntry';

const CoursesListComponent = props => (
  <div>
    <h4> Exams avaiable</h4>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>CFU</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.exams.map((element, index) => (
            <ExamApplicationEntry
              index={index}
              {...element}
              address={props.address}
              subscribeToExam={props.subscribeToExam}
            />
          ))
        }
      </tbody>
    </Table>
  </div>
);

CoursesListComponent.propTypes = {
  exams: PropTypes.arrayOf.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default CoursesListComponent;