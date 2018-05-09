import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Sidebar, Header, Box } from 'grommet';
import MenuEntries from '../../components/admin/MenuEntries';
import { MenuEntries as MenuEntriesReducer } from '../../reducers';

const MenuAdmin = ({ active, changeActive }) => (
  <Sidebar
    fixed
    full="false"
    margin={{ vertical: 'none' }}
    pad={{ vertical: 'none', horizontal: 'small' }}
  >
    <Header>
        Admin Menù
    </Header>
    <Box
      flex="grow"
      justify="start"
    >
      <MenuEntries active={active} action={changeActive} />

    </Box>
  </Sidebar>
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
