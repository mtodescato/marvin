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
        <td>
          <Button primary onClick={() => this.setLayer()}>Subscribe</Button>
        </td>
        {this.state.showLayer ?
          <ConfirmationExam
            setLayer={this.setLayer}
            examName={this.props.name}
            examDate={this.props.date}
            examAddress={this.props.address}
            subscribeToExam={this.props.subscribeToExam}
            setStatus={this.props.setStatus}
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
  address: PropTypes.string.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default ExamApplicationEntry;
