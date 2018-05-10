import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from 'grommet';

export const entries = [
  'Home',
  'Booklet',
  'Courses',
  'Exams',
  'Results',
  'Degree',
];

const MenuEntries = ({ active = 0, action }) => (
  entries.map((value, index) => (
    <Anchor
      className={index === active ? 'active' : ''}
      onClick={() => action(index)}
    >
      {value.toString()}
    </Anchor>
  ))
);

MenuEntries.propTypes = {
  active: PropTypes.number,
};

MenuEntries.defaultProps = {
  active: 0,
};

export default MenuEntries;