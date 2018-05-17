import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Header, Box } from 'grommet';
import PropTypes from 'prop-types';
import { MenuEntries as MenuEntriesReducer } from '../../reducers';
import MenuEntries from '../../components/shared/MenuEntries';
import { menuEntriesStudent } from '../../components/menuEntries';

const MenuStudent = ({ active, changeActive }) => (
  <Sidebar
    fixed
    full="false"
    margin={{ vertical: 'none' }}
    pad={{ vertical: 'none', horizontal: 'small' }}
  >
    <Header>
        Student Menù
    </Header>
    <Box
      flex="grow"
      justify="start"
    >
      <MenuEntries
        entries={menuEntriesStudent}
        active={active}
        action={changeActive}
      />
    </Box>
  </Sidebar>
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
