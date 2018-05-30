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
      initialize={bookletInfoRequest}
    />
  </div>
);

Booklet.propTypes = {
  status: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    matricola: PropTypes.string.isRequired,
  }).isRequired,
  exams: PropTypes.arrayOf(PropTypes.shape({
    nome: PropTypes.string.isRequired,
    responsabile: PropTypes.string.isRequired,
    stato: PropTypes.string.isRequired,
    voto: PropTypes.number.isRequired,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Booklet);
