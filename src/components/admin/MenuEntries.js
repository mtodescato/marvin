import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Menu, Accordion, AccordionPanel, Box } from 'grommet';
import HomeIcon from 'grommet/components/icons/base/Home';

const MenuEntries = ({ active = 0, action, entries }) => (
  <Accordion>
    <Anchor
      key="Home"
      className={active === 0 ? 'active' : ''}
      onClick={() => action(0)}
      primary
      icon={<HomeIcon />}
    >
      Home
    </Anchor>
    {entries.map((value, index) => (
      <AccordionPanel
        key={value.entry}
        heading={value.entry}
        pad="none"
      >
        <Box pad={{ vertical: 'none', horizontal: 'small' }}>
          <Menu
            responsive
            primary
            inline
          >
            {
              value.subEntries.map((v, i) => (
                <Anchor
                  key={[v]}
                  className={(2 * index) + i + 1 === active ? 'active' : ''}
                  onClick={() => action((2 * index) + i + 1)}
                >
                  {v}
                </Anchor>
              ))
            }
          </Menu>
        </Box>
      </AccordionPanel>

  ))}
    <Accordion onActive={() => action(9)} >
      <AccordionPanel
        heading="Show Me The Cost"
        primary
      />
    </Accordion>
  </Accordion>
);

MenuEntries.propTypes = {
  active: PropTypes.number,
  entries: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.string.isRequired,
  ])).isRequired,
  action: PropTypes.func.isRequired,
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
