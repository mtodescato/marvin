import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import TableRow from 'grommet/components/TableRow';
import ConfirmationComponent from '../../components/student/ConfirmationComponent';

class CourseEntry extends React.Component {
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
        <td>{this.props.year}</td>
        <td><Button onClick={this.setLayer}>Iscriviti</Button></td>
        {this.state.showLayer ?
          <ConfirmationComponent
            setLayer={this.setLayer}
            courseName={this.props.name}
            courseYear={this.props.year}
          />
             : null
          }
      </TableRow>
    );
  }
}

ConfirmationComponent.propTypes = {
  setLayer: PropTypes.func.isRequired,
  courseName: PropTypes.string.isRequired,
  courseYear: PropTypes.string.isRequired,
};

CourseEntry.propTypes = {
  name: PropTypes.string.isRequired,
  president: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CourseEntry;
