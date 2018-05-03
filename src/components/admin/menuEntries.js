import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Accordion, AccordionPanel } from 'grommet';

export const entries = [
  { entry: 'Home', subEntries: [] },
  { entry: 'Users', subEntries: ['List Users', 'Add User'] },
  { entry: 'Courses', subEntries: ['List Study Courses', 'Add Study Course'] },
  { entry: 'Academic Activities', subEntries: ['Add Academic Activity', 'List  Academic Activities'] },
  { entry: 'Academic Years', subEntries: ['Add Academic Year', 'List Academic Years'] },
  { entry: 'Degree Procedures', subEntries: ['Doe', 'blue'] },
];


const MenuEntries = ({ active = 0, action }) => (
  <Accordion>
    {entries.map(value => (
      <AccordionPanel heading={value.entry}>
        {value.subEntries.map((v, i) => (
          <Anchor
            className={i === active ? 'active' : ''}
            onClick={() => action(i)}
          >
            {v}
          </Anchor>))}

      </AccordionPanel>

  ))}
  </Accordion>
);

MenuEntries.propTypes = {
  active: PropTypes.number,
  action: PropTypes.shape({
    createDegreeRequestRequest: PropTypes.func.isRequired,
  }).isRequired,
};

MenuEntries.defaultProps = {
  active: 0,
};

export default MenuEntries;

/* <Menu label={value.entry}>
      {value.subEntries.map((v) => {
        index += 1;
        return (
          <Anchor
            className={index === active ? 'active' : ''}
            onClick={() => action(index)}
          >
            {v}
          </Anchor>);
      })}
    </Menu> */
