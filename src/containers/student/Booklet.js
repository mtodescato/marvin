/*
 * file: Booklet.js
 * version: 0.1
 * type: react component
 * authors: Giovanni Calore
 * license: MIT License
 * warnings: component for user Booklet information
 * changes:
 * * Giovanni Calore   | 2018/04/22 | file creation
 */


import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BookletInfo as BookletInfoReducer } from '../../reducers';
import BookletComponent from '../../components/student/BookletComponent';

const Booklet = ({
  status,
  activeCourseName,
  user,
  bookletInfoRequest,
  exams,
}) => (
  <div>
    <BookletComponent
      bookletInfoRequest={bookletInfoRequest}
      status={status}
      user={user}
      exams={exams}
      activeCourseName={activeCourseName}
      initialize={bookletInfoRequest}
    />
  </div>
);

Booklet.propTypes = {
  status: PropTypes.string.isRequired,
  activeCourseName: PropTypes.PropTypes.shape({
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    address: PropTypes.string,
    matricola: PropTypes.string.isRequired,
  }).isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string.isRequired,
    responsabile: PropTypes.string.isRequired,
    stato: PropTypes.string.isRequired,
    voto: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  })).isRequired,
  bookletInfoRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  bookletInfoRequest: () => dispatch(BookletInfoReducer.creators.bookletInfoRequest()),
});

const mapStateToProps = state => ({
  status: state['booklet-info-student'].status,
  user: state['booklet-info-student'].user,
  exams: state['booklet-info-student'].exams,
  activeCourseName: state['booklet-info-student'].activeCourseName,
});

export default connect(mapStateToProps, mapDispatchToProps)(Booklet);
