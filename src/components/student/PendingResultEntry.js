import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button } from 'grommet';
import CheckMark from 'grommet/components/icons/base/Checkmark';
import Close from 'grommet/components/icons/base/Close';
import ConfirmationResult from './ConfirmationResult';

class PendingResultEntry extends React.Component {
  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);

    this.onAccept = this.onAccept.bind(this);
    this.onReject = this.onReject.bind(this);

    this.state = {
      decision: false,
      showLayer: false,
    };
  }

  onAccept() {
    this.setState({
      decision: true,
    });
    this.setLayer();
  }

  onReject() {
    this.setState({
      decision: false,
    });
    this.setLayer();
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
        <td>{this.props.mark}</td>
        <td>
          <Button onClick={() => this.onAccept()} icon={<CheckMark />} primary />
          {' '}
          <Button onClick={() => this.onReject()} icon={<Close />} primary />
        </td>
        {this.state.showLayer ?
          <ConfirmationResult
            setLayer={this.setLayer}
            examName={this.props.name}
            examDate={this.props.date}
            examMark={this.props.mark}
            examAddress={this.props.address}
            decision={this.state.decision}
            manageVote={this.props.manageVote}
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
  cfu: PropTypes.number.isRequired,
  mark: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  manageVote: PropTypes.func.isRequired,
};

export default PendingResultEntry;

