import React from 'react';
import Table from 'grommet/components/Table';
import PropTypes from 'prop-types';
import TeachingEntry from './TeachingEntry';

const ListTeachingsComponent = props => (
  <div>
    <h4> Academic Activities List</h4>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Professor</th>
          <th>Degree Course</th>
        </tr>
      </thead>
      <tbody>
        {
          props.teachings.map((element, index) => (
            <TeachingEntry
              index={index}
              {...element}
              address={props.address}
            />
          ))
        }
      </tbody>
    </Table>
  </div>
);

ListTeachingsComponent.propTypes = {
  teachings: PropTypes.arrayOf.isRequired,
  address: PropTypes.string.isRequired,
};

export default ListTeachingsComponent;
