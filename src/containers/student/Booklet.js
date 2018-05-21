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
import { BookletInfo as BookletInfoReducer } from '../../reducers';
import BookletComponent from '../../components/student/BookletComponent';

const Booklet = props => (
  <div>
    <BookletComponent {...props} />
    {}
  </div>
);

const mapDispatchToProps = dispatch => ({
  bookletInfoRequest: address => dispatch(BookletInfoReducer.creators.bookletInfoRequest(address)),
});

const mapStateToProps = state => ({
  // address: state['web.3'].address,
  // status: state['web.3'].statusMetamask,
  status: state['booklet-info-student'].status,
  booklet: state['booklet-info-student'].booklet,
});

export default connect(mapStateToProps, mapDispatchToProps)(Booklet);
