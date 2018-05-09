import React from 'react';
import PropTypes from 'prop-types';
import MarvinHeaderComponent from '../../components/shared/MarvinHeader';

const MarvinHeader = props => (
  <div>
    <MarvinHeaderComponent title={props.title} />
  </div>
);

MarvinHeader.defaultProps = {
  title: '',
};

MarvinHeader.propTypes = {
  title: PropTypes.string,
};

export default MarvinHeader;
