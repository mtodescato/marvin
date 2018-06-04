import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button } from 'grommet';
import ConfirmationResult from './ConfirmationResult';

class PendingResultEntry extends React.Component {
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
        <td>{this.props.mark}</td>
        <td>
          <Button onClick={() => this.setLayer()} primary>
            Manage
          </Button>
        </td>
        {this.state.showLayer ?
          <ConfirmationResult
            setLayer={this.setLayer}
            examName={this.props.name}
            examDate={this.props.date}
            examMark={this.props.mark}
            examAddress={this.props.examAddress}
            accept={this.props.accept}
            reject={this.props.reject}
            setStatus={this.props.setStatus}
          />
                      : null
                    }
      </TableRow>
    );
  }
}

PendingResultEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  mark: PropTypes.number.isRequired,
  examAddress: PropTypes.string.isRequired,
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default PendingResultEntry;

