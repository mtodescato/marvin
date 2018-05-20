import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button } from 'grommet';
import ConfirmationExam from './ConfirmationExam';

class ExamApplicationEntry extends React.Component {
  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);

    this.state = {
      showLayer: false,
    };
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
        <td>{this.props.cfu}</td>
        <td>
          <Button primary onClick={() => this.setLayer()}>Subscribe</Button>
        </td>
        {this.state.showLayer ?
          <ConfirmationExam
            setLayer={this.setLayer}
            examName={this.props.name}
            examDate={this.props.date}
            examCFU={this.props.cfu}
            examAddress={this.props.address}
            subscribeToExam={this.props.subscribeToExam}
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
  cfu: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
};

export default ExamApplicationEntry;
