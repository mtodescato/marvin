import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from 'grommet';
import Menu from 'grommet/components/Menu';

export const entries = [
  { entry: 'Home', subItems: [] },
  { entry: 'Users', subItems: ['List Users', 'Add User'] },
  { entry: 'Courses', subItems: ['List Study Courses', 'Add Study Course'] },
  { entry: 'Academic Activities', subItems: ['Add Academic Activity', 'List  Academic Activities'] },
  { entry: 'Academic Years', subItems: ['Add Academic Year', 'List Academic Years'] },
  { entry: 'Degree Procedures', subItems: ['Doe', 'blue'] },
];

let index = -1;

const MenuEntries = ({ active = 0, action }) => (
  entries.map(value => (
    <Menu label={value.entry}>
      {value.subItems.map((v) => {
        index += 1;
        return (
          <Anchor
            className={index === active ? 'active' : ''}
            onClick={() => action(index)}
          >
            {v}
          </Anchor>);
      })}
    </Menu>
  ))
);

MenuEntries.propTypes = {
  active: PropTypes.number,
};

MenuEntries.defaultProps = {
  active: 0,
};

export default MenuEntries;
