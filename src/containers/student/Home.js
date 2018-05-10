import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from '../../components/student/HomeComponent';

const Home = ({ name, matricola, address }) => (
  <HomeComponent user={{ name, matricola, address }} />
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  matricola: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state['web-3-user-info'].data.name,
  matricola: String(state['web-3-user-info'].data.serial),
  address: state['web-3'].address,
});

export default connect(mapStateToProps)(Home);
