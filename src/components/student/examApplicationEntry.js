import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';
import Button from 'grommet/components/Button';
import ConfirmationExamComponent from './confirmationExam';

class ExamApplicationEntry extends React.Component {
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
        <td>{this.props.date}</td>
        <td>{this.props.president}</td>
        <td>{this.props.cfu}</td>
        <td><Button onClick={this.setLayer} label="Iscriviti" primary /></td>
        {this.state.showLayer ?
          <ConfirmationExamComponent
            setLayer={this.setLayer}
            name={this.props.name}
            date={this.props.date}
          />
             : null
          }
      </TableRow>
    );
  }
}

ExamApplicationEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  president: PropTypes.string.isRequired,
  cfu: PropTypes.number.isRequired,
};

export default ExamApplicationEntry;
