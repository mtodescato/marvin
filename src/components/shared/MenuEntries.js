import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Anchor } from 'grommet';
import HomeIcon from 'grommet/components/icons/base/Home';

const MenuEntries = ({ active = 0, action, entries }) => (
  <Menu
    responsive
    primary
    inline
  >
    <Anchor
      className={active === 0 ? 'active' : ''}
      onClick={() => action(0)}
      primary
      icon={<HomeIcon />}
    >
      Home
    </Anchor>

    { entries.map((value, index) => (
      <Anchor
        key={[value]}
        className={index + 1 === active ? 'active' : ''}
        onClick={() => action(index + 1)}
      >
        {value.toString()}
      </Anchor>
      ))
  }
  </Menu>
);

MenuEntries.propTypes = {
  active: PropTypes.number,
  entries: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
};

MenuEntries.defaultProps = {
  active: 0,
};

export default MenuEntries;
