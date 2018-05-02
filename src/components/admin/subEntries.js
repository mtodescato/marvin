import React from 'react';
import PropTypes from 'prop-types';
import { Anchor} from 'grommet';
import entries from "./menuEntries.js"

const subEntries = ({ active = 0, action }) => (
   /* entries.map((value, index) => (
        <Anchor className={index === active ? 'active' : ''} onClick={() => action(index)}>
            {value.subItems.toString()}
        </Anchor>
    ))*/
      <Anchor className={0 === active ? 'active' : ''} onClick={() => action(0)}>
            prova non va
      </Anchor>
);

subEntries.propTypes = {
  active: PropTypes.number,
};

subEntries.defaultProps = {
  active: 0,
};

export default subEntries;
