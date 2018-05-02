import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionTypes from '../../actions/admin/menuEntriesAction';
import MenuEntries from '../../components/admin/menuEntries';
import { Anchor, Menu } from 'grommet';


const MenuAdmin = ({ active, action }) => (
  <MenuEntries active={active} action={action.changeActive} />
);

MenuAdmin.propTypes = {
  active: PropTypes.number.isRequired,
  action: PropTypes.shape({
    changeActive: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(actionTypes, dispatch),
});

const mapStateToProps = state => ({
  active: state.menuEntriesReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAdmin);
