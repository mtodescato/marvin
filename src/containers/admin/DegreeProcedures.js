import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import DegreeProceduresComponent from '../../components/admin/DegreeProceduresComponent';
// import { ListDegreeProcedures as ListDegreeProceduresReducer } from '../../reducers';

export const procedures = [{
  date: '31/03/2017',
  studentName: 'Salvo',
  studentSurname: 'Errori',
  studentSerialNumber: '54788',
  thesisTitle: 'Le altezze',
  requestState: false,
  relatorName: 'Francescfopaolo',
  relatorSurname: 'Montefalcone',
}, {
  date: '31/06/2018',
  studentName: 'Ennio',
  studentSurname: 'Annio',
  studentSerialNumber: '533432',
  thesisTitle: 'Heyla',
  requestState: false,
  relatorName: 'Paolo',
  relatorSurname: 'Maolo',
}, {
  date: '22/03/2017',
  studentName: 'Giangianni',
  studentSurname: 'Ya',
  studentSerialNumber: '54788',
  thesisTitle: 'Le altezze',
  requestState: false,
  relatorName: 'Francescfopaolo',
  relatorSurname: 'Montefalcone',
},
];

/*
class DegreeProcedures extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <DegreeProceduresComponent
        size={this.props.size}
        degreeProcedureEntries={this.props.procedures}
        manageDPRequest={this.props.manageDPRequest}
      />
    );
  }
} */

const DegreeProcedures = () => (
  <DegreeProceduresComponent
    size={3}
    degreeProcedureEntries={procedures}
    // manageDPRequest={this.props.manageDPRequest}
  />
);

DegreeProcedures.propTypes = { /*
  procedures: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    studentName: PropTypes.string.isRequired,
    studentSurname: PropTypes.string.isRequired,
    studentSerialNumber: PropTypes.string.isRequired,
    thesisTitle: PropTypes.string.isRequired,
    requestState: PropTypes.string.isRequired,
    relatorName: PropTypes.string.isRequired,
    relatorSurname: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  manageDPRequest: PropTypes.func.isRequired, */
};

const mapDispatchToProps = () => ({
/*
const mapDispatchToProps = dispatch => ({
  manageDPRequest: (address) => {
    dispatch(ListDegreeProceduresReducer.creators.manageDegreeProcedureRequest(address)); },
  initialize: () => {
    dispatch(ListDegreeProceduresReducer.creators.listDegreeProceduresRequest()); }, */
});

const mapStateToProps = () => ({
/*
const mapStateToProps = state => ({
  procedures: state['list-degree-procedures'].procedures,
  size: state['list-degree-procedures'].size, */
});

export default connect(mapStateToProps, mapDispatchToProps)(DegreeProcedures);
