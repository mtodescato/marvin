import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MenuEntries as MenuEntriesReducer } from '../../reducers';
import MenuEntries from '../../components/student/MenuEntries';

const MenuStudent = ({ active, changeActive }) => (
  <MenuEntries active={active} action={changeActive} />
);

MenuStudent.propTypes = {
  active: PropTypes.number.isRequired,
  changeActive: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeActive: newId => dispatch(MenuEntriesReducer.creators.changeActive(newId)),
});

const mapStateToProps = state => ({
  active: state['menu-entries'].id,
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuStudent);
