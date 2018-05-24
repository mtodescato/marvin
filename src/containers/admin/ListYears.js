import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { ListYears } from '../../reducers';
import ListYearsComponent from '../../components/admin/ListYearsComponent';

export const years = [{
  year: 2019,
  address: 'yfghjkfljglkajglkasjlkagag',
},
{
  year: 2018,
  address: 'oilsor894ujorijflkgjsoidfsd',
},
{
  year: 2017,
  address: 'pseoiytooudfuogioalkjfklgsd',
},
];

const ListYears = () => (
  <ListYearsComponent
    years={years}
    size={3}
  />
);

/*
class ListYears extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }
  render() {
    return (
      <ListYearsComponent
        // years={this.props.years}
        size={this.props.size}
      />
    );
  }
} */

ListYears.propTypes = {
  /* years: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired, */
};
/*
const mapStateToProps = state => ({
  // years: state['list-years'].years,
  // size: state['list-years'].size,
});

const mapDispatchToProps = dispatch => ({
  initialize: (year) => {
    dispatch(ListYears.creators.listYearsRequest(year));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListYears);
*/

export default connect(null, null)(ListYears);
