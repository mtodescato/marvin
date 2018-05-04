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
          <th>CFU</th>
          <th>Result</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.examsResults.map((element, index) => (
            <PendingResultEntry
              index={index}
              {...element}
              manageVote={props.manageVote}
            />
          ))
        }
      </tbody>
    </Table>
  </div>
);

ListPendingResultsComponent.propTypes = {
  examsResults: PropTypes.arrayOf.isRequired,
  manageVote: PropTypes.func.isRequired,
};

export default ListPendingResultsComponent;
