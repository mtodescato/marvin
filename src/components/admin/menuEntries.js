import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Menu, Accordion, AccordionPanel } from 'grommet';

export const entries = [
  { entry: 'Users', subEntries: ['List Users', 'Create User'] },
  { entry: 'Courses', subEntries: ['List Study Courses', 'Create Study Course'] },
  { entry: 'Academic Activities', subEntries: ['List  Academic Activities', 'Create Academic Activity'] },
  { entry: 'Academic Years', subEntries: ['List Academic Years', 'Create Academic Year'] },
  { entry: 'Degree Procedures', subEntries: ['Doe', 'blue'] },
];


const MenuEntries = ({ active = 0, action }) => (
  <Accordion>
    <Anchor
      className={active === 0 ? 'active' : ''}
      onClick={() => action(0)}
      responsive
      primary
    >
      Home
    </Anchor>
    {entries.map(value => (
      <AccordionPanel heading={value.entry} pad="none">
        <Box pad={{ vertical: 'none', horizontal: 'small' }}>
          <Menu
            responsive
            primary
            inline
          >
            {value.subEntries.map((v, i) => (
              <Anchor
                className={i + 1 === active ? 'active' : ''}
                onClick={() => action(i + 1)}
              >
                {v}
              </Anchor>))}
          </Menu>
        </Box>
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
