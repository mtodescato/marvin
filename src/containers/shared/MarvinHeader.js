import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MarvinHeaderComponent from '../../components/shared/MarvinHeader';

const MarvinHeader = ({ name, surname, title }) => (
  <div>
    <MarvinHeaderComponent user={{ name, surname }} title={title} />
  </div>
);

MarvinHeader.defaultProps = {
  title: '',
};

MarvinHeader.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state['web-3-user-info'].data.name,
  surname: state['web-3-user-info'].data.surname,
});

export default connect(mapStateToProps)(MarvinHeader);
