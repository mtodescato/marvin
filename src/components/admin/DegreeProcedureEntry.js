import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Button } from 'grommet';
import CheckMark from 'grommet/components/icons/base/Checkmark';
import Close from 'grommet/components/icons/base/Close';
import RequestResultConfirmation from './RequestResultConfirmation';

class DegreeProcedureEntry extends React.Component {
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
        <td>{this.props.date}</td>
        <td>{`${this.props.studentName} ${this.props.studentSurname}`}</td>
        <td>{this.props.studentSerialNumber}</td>
        <td>{this.props.thesisTitle}</td>
        <td>{`${this.props.relatorName} ${this.props.relatorSurname}`}</td>
        <td>{this.props.requestState}</td>
        <td>
          TODO
          <Button
            primary
            onClick={() => this.setLayer()}
            icon={<CheckMark size="xsmall" />}
            fill="true"
          />
          {' '}
          <Button
            primary
            onClick={() => this.setLayer()}
            icon={<Close size="xsmall" />}
            fill="true"
          />
        </td>
        {this.state.showLayer ?
          <RequestResultConfirmation
            setLayer={this.setLayer}
            date={this.props.date}
            userName={this.props.studentName}
            userSurname={this.props.studentSurname}
            thesisTitle={this.props.thesisTitle}
            // manageDPRequest={this.props.manageDPRequest}
          />
                      : null
                    }
      </TableRow>
    );
  }
}

DegreeProcedureEntry.propTypes = {
  index: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  studentName: PropTypes.string.isRequired,
  studentSurname: PropTypes.string.isRequired,
  studentSerialNumber: PropTypes.string.isRequired,
  thesisTitle: PropTypes.string.isRequired,
  requestState: PropTypes.string.isRequired,
  relatorName: PropTypes.string.isRequired,
  relatorSurname: PropTypes.string.isRequired,
  // manageDPRequest: PropTypes.func.isRequired,
};

export default DegreeProcedureEntry;
