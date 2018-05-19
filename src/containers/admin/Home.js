import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from '../../components/shared/HomeComponent';

const Home = ({
  name, surname, matricola, address,
}) => (
  <HomeComponent
    user={{
      name, surname, matricola, address,
    }}
    message="admin"
  />
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  matricola: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state['web-3-user-info'].data.name,
  surname: state['web-3-user-info'].data.surname,
  matricola: String(state['web-3-user-info'].data.serial),
  address: state['web-3'].address,
});

export default connect(mapStateToProps)(Home);
