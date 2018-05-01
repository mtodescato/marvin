import React from 'react';
import Table from 'grommet/components/Table';
import PropTypes from 'prop-types';
import PendingResultEntry from './pendingResultEntry';

const ListPendingResultsComponent = props => (
  <div>
    <h4> Exams results</h4>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>President</th>
          <th>CFU</th>
          <th>Result</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.exams.map((element, index) => (
            <PendingResultEntry
              index={index}
              {...element}
            />
          ))
        }
      </tbody>
    </Table>
  </div>
);

ListPendingResultsComponent.propTypes = {
  exams: PropTypes.arrayOf.isRequired,
};

export default ListPendingResultsComponent;
