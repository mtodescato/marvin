import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import TableRow from 'grommet/components/TableRow';
import ConfirmationComponent from '../../components/student/confirmationApplication';

class CoursesEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false,
    };
    this.setLayer = this.setLayer.bind(this);
  }
  setLayer() {
    this.setState({
      showLayer: !this.state.showLayer,
    });
  }

  render() {
    return (
      <TableRow>
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td>{this.props.president}</td>
        <td>{this.props.type}</td>
        <td><Button onClick={this.setLayer} label="Iscriviti" primary /></td>
        {this.state.showLayer ?
          <ConfirmationComponent
            setLayer={this.setLayer}
            courseName={this.props.name}
            subscribeToCourse={this.props.subscribeToCourse}
            address={this.props.address}
          />
             : null
          }
      </TableRow>
    );
  }
}

CoursesEntry.propTypes = {
  name: PropTypes.string.isRequired,
  president: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default CoursesEntry;
