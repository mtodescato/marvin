import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';
import TableRow from 'grommet/components/TableRow';
import CheckMark from 'grommet/components/icons/base/Checkmark';
import Close from 'grommet/components/icons/base/Close';
import ConfirmationResultComponent from '../../components/student/ConfirmationResult';

class PendingResultEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false,
      action: 'undefined',
    };
    this.setLayer = this.setLayer.bind(this);
  }
  setLayer(act) {
    this.setState({
      showLayer: !this.state.showLayer,
      action: act,
    });
  }

  render() {
    return (
      <TableRow>
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td>{this.props.date}</td>
        <td>{this.props.cfu}</td>
        <td>{this.props.result}</td>
        <td>
          <Button onClick={() => this.setLayer('a')} icon={<CheckMark />} primary />
          {' '}
          <Button onClick={() => this.setLayer('r')} icon={<Close />} primary />
        </td>
        {this.state.showLayer ?
          <ConfirmationResultComponent
            setLayer={this.setLayer}
            action={this.state.action}
            name={this.props.name}
            date={this.props.date}
            result={this.props.result}
            manageVote={this.props.manageVote}
          />
             : null
          }
      </TableRow>
    );
  }
}

PendingResultEntry.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  cfu: PropTypes.number.isRequired,
  manageVote: PropTypes.func.isRequired,
};

export default PendingResultEntry;
