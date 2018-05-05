import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuEntries from '../../components/admin/menuEntries';
import { MenuEntries as MenuEntriesReducer } from '../../reducers';

const MenuAdmin = ({ active, changeActive }) => (
  <MenuEntries active={active} action={changeActive} />
);

MenuAdmin.propTypes = {
  active: PropTypes.number.isRequired,
  changeActive: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeActive: (newId) => { dispatch(MenuEntriesReducer.creators.changeActive(newId)); },
});

const mapStateToProps = state => ({
  active: state['menu-entries'].id,
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAdmin);
