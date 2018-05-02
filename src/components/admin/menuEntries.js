import React from 'react';
import PropTypes from 'prop-types';
import { AccordionPanel, Anchor} from 'grommet';
import SubMenu from "./subEntries";

export const entries = [
  'Home',
  'Create Users',
  'List Users',
  'Create Study Courses',
  'List Study Courses',
  'Create Academic Activities',
  'List Academic Activities',
  'Create Academic Year',
  'List Academic Years',
  'Degree Procedures'
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
